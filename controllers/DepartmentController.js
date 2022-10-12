const { DEFAULT_PAGINATION, DEFAULT_SORT } = require('../common');
const Department = require('../models/DepartmentModel');
const User = require('../models/UserModel');
const Company = require('../models/CompanyModal');
const Joi = require('joi');
const { Roles } = require('../utils/enum');
const { registerAdminUserEmail } = require('../utils/email');
const { forEach } = require('lodash');
const jwt = require('jsonwebtoken');
const config = require('config');
const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey(config.get('send_grid'));
const _ = require('lodash');

module.exports.addDepartment = async (req, res, next) => {
  const { body, userData } = req;
  const schema = Joi.object()
    .keys({
      name: Joi.string().min(2).max(100).required(),
    })
    .options({
      allowUnknown: true,
    });
  const result = schema.validate(body);
  const { value, error } = result;
  const valid = error == null;
  if (!valid) {
    res.status(400).json({
      message: 'Invalid request',
      error: error,
    });
  } else {
    if (userData.role === Roles.user) {
      return res.status(400).json({
        message: '',
        statusCode: 400,
        data: null,
        error: 'Only managers and admins are allowed to add departments!',
      });
    }
    try {
      const company = await Company.findById(userData.companyId);
      if (!company) {
        return res.status(400).json({
          message: 'Company Not Found!',
          statusCode: 400,
          data: null,
          error: 'Company Not Found!',
        });
      }
      let departments = new Department({
        ...body,
        companyId: company._id,
      });
      departments.userId = userData._id;
      await departments.save();
      company.department.push(departments._id);
      await company.save();
      var user = '';
      if (body.employees.length) {
        if (!body.userRole) {
          return res.status(400).json({
            error: 'Role is required',
            statusCode: 400,
            data: body,
          });
        }
        forEach(body.employees, async (employee) => {
          user = await User.findById(employee);
          if (user) {
            user.role = body.userRole;
            user.departmentId = departments._id;
            user.departmentName = departments.name;
            await user.save();
          }
        });
      }
      return res.status(200).json({
        message: 'Department added Successfully',
        statusCode: 200,
        data: body,
        error: null,
      });
    } catch (e) {
      res.status(500).json({
        message: 'Something went wrong',
        statusCode: 500,
        data: null,
        error: e.message,
      });
    }
  }
};

module.exports.getDepartment = async (req, res, next) => {
  const { userData } = req;
  const { pageNumber, pageSize, sortBy, sortOrder } = req.query;
  const limit = parseInt(pageSize) || DEFAULT_PAGINATION.LIMIT;
  const offset = pageNumber
    ? limit * (pageNumber - 1)
    : DEFAULT_PAGINATION.OFFSET;
  const orderColumn = sortBy || DEFAULT_SORT.COLUMN;
  const orderType = sortOrder || DEFAULT_SORT.ORDER;
  const all_departments = await Department.find({
    companyId: userData.companyId,
  }).sort({
    updated_at: -1
  });
  const departmets = await Department.find({ companyId: userData.companyId })
    .limit(limit)
    .skip(offset)
    .exec()
    .catch((err) => {
      return res.status(400).json({
        message: 'Something went wrong',
        statusCode: 400,
      });
    });

  return res.status(200).json({
    message: 'Success',
    statusCode: 200,
    data: {
      pageNumber: parseInt(pageNumber),
      limit,
      totalCount: all_departments.length,
      latest_activity: all_departments[0]?.updated_at,
      list: departmets,
    },
    error: null,
  });
};

module.exports.update = async (req, res, next) => {
  const { body, userData, params } = req;
  const schema = Joi.object()
    .keys({
      name: Joi.string().min(2).max(100).required(),
    })
    .options({
      allowUnknown: true,
    });
  const result = schema.validate(body);
  const { value, error } = result;
  const valid = error == null;
  if (userData.role === Roles.user) {
    return res.status(400).json({
      message: 'Invalid request',
      statusCode: 400,
      error: 'Only admin or manager can edit',
    });
  }
  if (!valid) {
    return res.status(400).json({
      message: 'Invalid request',
      statusCode: 400,
      data: body,
      error: error,
    });
  } else {
    const company = await Company.findById(userData.companyId);
    if (!company) {
      return res.status(400).json({
        message: 'Company Not Found!',
        statusCode: 400,
        data: null,
        error: 'Company Not Found!',
      });
    }
    var whereClause = {
      _id: params.id,
      companyId: userData.companyId,
    };
    Department.findOne(whereClause)
      .exec()
      .then(async (departmentData) => {
        if (!departmentData) {
          return res.status(400).json({
            message: 'Record not found',
            statusCode: 404,
            data: null,
            error: null,
          });
        } else {
          const employees = departmentData.employees;
          const existing_emps = _.map(departmentData.employees, emp => emp.toString());
          const exculed_emps = _.difference(existing_emps, body.employees);
          const input_emps = _.difference(body.employees, existing_emps);
          let user = null;
          if (exculed_emps.length) {
            forEach(exculed_emps, async (employee) => {
              user = await User.findById(employee);
              if (user) {
                user.departmentId = null;
                user.departmentName = '';
                user.role = Roles.user;
                user.isVerified = false;
                await user.save();
              }
            });
          }
          if (body.employees.length) {
            if (!body.userRole) {
              return res.status(400).json({
                message: 'Role is required',
                statusCode: 400,
                error: 'Role is required',
              });
            }
          }
          await departmentData
            .update(body)
            .exec()
            .then(async (result) => {
              const updated = await Department.findOne(whereClause).exec();
              if (body.employees.length) {
                forEach(body.employees, async (employee) => {
                  user = await User.findById(employee);
                  if (user) {
                    user.departmentId = updated._id;
                    user.role = body.userRole;
                    user.departmentName = updated.name;
                    await user.save();
                  }
                });
              }
              return res.status(200).json({
                message: 'Department updated Successfully',
                statusCode: 200,
                data: updated,
                error: null,
              });
            });
        }
      })
      .catch((error) => {
        return res.status(400).json({
          message: 'Error in updating',
          statusCode: 400,
          error: error,
        });
      });
  }
};

module.exports.delete = async (req, res, next) => {
  const { body, userData, params } = req;
  var whereClause = {
    _id: params.id,
    companyId: userData.companyId,
  };
  if (userData.role === Roles.user) {
    return res.status(400).json({
      message: 'User not allowed to delete another user',
      statusCode: 400,
    });
  }
  let department = await Department.findOne(whereClause);
  if (!department) {
    return res.status(400).json({
      message: 'Department Not found!',
      statusCode: 400,
    });
  }
  let company = await Company.findById(userData.companyId);
  if (!company) {
    return res.status(400).json({
      message: 'Company Not found!',
      statusCode: 400,
    });
  }
  try {
    const employees = department.employees;
    let user = null;
    forEach(employees, async (employee) => {
      user = await User.findById(employee);
      if (user) {
        user.departmentId = null;
        user.departmentName = '';
        user.isVerified = false;
        await user.save();
      }
    });
    try {
      company.department = _.filter(company.department, emp => emp.toString() !== params?.id.toString());
      await company.save();
      await department.remove();
    } catch (e) {
      return res.status(400).json({
        message: 'Error in deleting department',
        statusCode: 400,
        body: e,
      });
    }
    return res.status(200).json({
      message: 'Department deleted',
      statusCode: 200,
      company,
    });
  } catch (e) { }
};
