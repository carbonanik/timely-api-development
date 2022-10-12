const { DEFAULT_PAGINATION, DEFAULT_SORT } = require('../common');
const Employee = require('../models/EmployeeModel');
const Department = require('../models/DepartmentModel');
const Joi = require('joi');
const _ = require('lodash');

module.exports.add = async (req, res, next) => {
  const { body, userData } = req;
  const schema = Joi.object()
    .keys({
      position: Joi.string().required(),
      departmentId: Joi.string(),
      userId: Joi.string(),
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
    if (userData.role !== 'manager') {
      res.status(400).json({
        message: '',
        statusCode: 400,
        data: null,
        error: 'Only managers are allowed to add departments!',
      });
    }

    try {
      let employee = new Employee({
        position: body.position,
        userId: body.userId,
      });
      await employee.save();
      await Department.findByIdAndUpdate(
        body.departmentId,
        {
          $push: { employees: employee._id },
        },
        {
          new: true,
          useFindAndModify: false,
        },
      );
      res.status(200).json({
        message: 'successfully inserted',
        statusCode: 200,
        data: body,
        error: null,
      });
    } catch (e) {
      res.status(400).json({
        message: 'some thing went wrong',
        statusCode: 400,
        data: null,
        error: e,
      });
    }
  }
};

module.exports.getEmployee = async (req, res, next) => {
  const { pageNumber, pageSize, sortBy, sortOrder } = req.query;

  const limit = pageSize || DEFAULT_PAGINATION.LIMIT;
  const offset = pageNumber ? limit * pageNumber : DEFAULT_PAGINATION.OFFSET;
  const orderColumn = sortBy || DEFAULT_SORT.COLUMN;
  const orderType = sortOrder || DEFAULT_SORT.ORDER;

  const employees = await Employee.find()
    .sort({ orderColumn: orderType })
    .limit(limit)
    .exec()
    .catch((err) => {
      res.status(400).json({
        message: 'Something went wrong',
        statusCode: 400,
      });
    });

  res.status(200).json({
    message: 'Success',
    statusCode: 200,
    data: {
      employees,
    },
    error: null,
  });
};
