const { DEFAULT_PAGINATION, DEFAULT_SORT } = require('../common');
const { USER_CONSTANTS } = require('../config/constant.js');
const User = require('../models/UserModel');
const Image = require('../models/ImageModel');
const { getMessage, registerAdminUserEmail } = require('../utils/email');
const Company = require('../models/CompanyModal');
const Department = require('../models/DepartmentModel');
const Settings = require('../models/SettingsModal');
const { Roles, Plans } = require('../utils/enum');
const Joi = require('joi');
const config = require('config');
const bcrypt = require('bcrypt');
const stripe = require('stripe')(config.get('stripe_key_secret'));
const jwt = require('jsonwebtoken');
const sendGridMail = require('@sendgrid/mail');
const Schedule = require('../models/ScheduleModal')
sendGridMail.setApiKey(config.get('send_grid'));
const _ = require("lodash");

module.exports.getUser = async (req, res, next) => {
  const { params, userData } = req;
  const user = await User.findOne({
    $and: [
      { companyId: userData.companyId },
      { _id: params.id },
    ]
  });
  if (!user) {
    return res.status(200).json({
      statusCode: 400,
      data: user,
      error: 'User Not found',
    });
  }
  return res.status(200).json({
    message: 'Success',
    statusCode: 200,
    data: user,
    error: null,
  });
};
module.exports.getUsers = async (req, res, next) => {
  const {
    pageNumber,
    pageSize,
    day,
    department,
    search,
    sortBy,
    sortOrder,
    type,
    filter,
  } = req.query;

  const { userData } = req;
  if (type === 'all') {
    const users = await User.find({
      $and: [
        { companyId: userData.companyId },
        { $or: [{ role: "manager" }, { role: "user" }] }
      ]
    });
    return res.status(200).json({
      message: 'Success',
      statusCode: 200,
      data: {
        list: users,
      },
      error: null,
    });
  }

  const limit = parseInt(pageSize) || DEFAULT_PAGINATION.LIMIT;
  const offset = pageNumber
    ? limit * (pageNumber - 1)
    : DEFAULT_PAGINATION.OFFSET;

  const orderColumn = sortBy || DEFAULT_SORT.COLUMN;
  const orderType = sortOrder || DEFAULT_SORT.ORDER;

  const dayValue = day ? day : 'all';
  var date = new Date();

  switch (dayValue) {
    case 'today':
      from = { $gte: new Date(date.setHours(0, 0, 0, 999)) };
      break;
    case 'yesterday':
      from = { $gt: new Date(date.setDate(date.getDate() - 1)) };
      break;
    case 'week':
      from = { $gt: new Date(date.setDate(date.getDate() - 7)) };
      break;
    case 'month':
      from = { $gt: new Date(date.setDate(date.getDate() - 30)) };
      break;
    default:
      from = { $exists: true };
      break;
  }

  let query_object = { companyId: userData.companyId };

  if (day) {
    query_object["created_at"] = from
  }
  if (department) {
    query_object["departmentId"] = department
  }
  const regValue = new RegExp(search, 'g');
  const query =
    search
      ? {
        $and: [
          { ...query_object },
          { $or: [{ name: regValue }, { email: regValue }] },
          { $or: [{ role: "user" }, { role: "manager" }] },
        ],
      }
      : { $and: [{ ...query_object }, { $or: [{ role: "user" }, { role: "manager" }] }] };
  try {
    const all_users = await User.find({ $and: [{ companyId: userData.companyId }, { $or: [{ role: "user" }, { role: "manager" }] }] }).sort({ updated_at: -1 });
    const users = await User.find(query)
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
        totalCount: all_users.length,
        list: users,
        latest_activity: all_users[0]?.updated_at,
        queryCount: users.length,
      },
      error: null,
    });
  } catch (err) {
    return res.status(400).json({
      message: 'Something went wrong',
      statusCode: 400,
    });
  }
};

module.exports.add = async (req, res, next) => {
  const { body, userData } = req;
  const schema = Joi.object()
    .keys({
      addressOne: Joi.string().required(),
      addressTwo: Joi.string().required(),
      city: Joi.string().required(),
      email: Joi.string().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      password: Joi.string().required(),
      phone: Joi.string().required(),
      phoneType: Joi.string().required(),
      state: Joi.string().required(),
      role: Joi.string().required(),
    })
    .options({
      allowUnknown: true,
    });
  const result = schema.validate(body);
  const { value, error } = result;
  const valid = error == null;
  if (!valid) {
    return res.status(400).json({
      message: 'Invalid request',
      data: body,
      error: error.details[0].message,
    });
  } else {
    let email;
    if (req.body.email) email = req.body.email.toLowerCase() || 'NA';
    let user = await User.findOne({ email: email });

    if (user) {
      if ((email = user.email)) {
        return res.status(400).send({
          statusCode: 400,
          error: 'User already exists',
        });
      }
    }
    user = new User(body);
    user.email = email;
    const settings = new Settings({ userId: user._id });
    settings.save();
    if (req.body.password) {
      user.password = await bcrypt.hash(
        req.body.password,
        config.get('bcryptSalt'),
      );
    }
    let firstName;
    let lastName;
    if (req.body.firstName) firstName = req.body.firstName || 'NA';
    if (req.body.lastName) lastName = req.body.lastName || 'NA';
    const token = user.generateAuthToken();
    user.verficationToken = token;
    try {
      const customer = await stripe.customers.create({
        email: req.body.email,
      });
      user.stripeID = customer.id;
      await user.save();
      await sendGridMail.send(
        registerAdminUserEmail(token, email, firstName, lastName),
      );
    } catch (Ex) {
      console.log(Ex);
      if (Ex.code === 11000)
        return res.status(400).send({
          statusCode: 400,
          message: 'Failure',
          data: 'Something Went Wrong.',
        });
      else
        return res.status(500).send({
          statusCode: 500,
          message: 'Failure',
          data: 'Something Went Wrong',
        });
    }
    return res
      .header('Authorization', token)
      .send({ statusCode: 200, message: 'Success', data: user });
  }
};

module.exports.addEmployee = async (req, res, next) => {
  const { body, userData } = req;
  const schema = Joi.object()
    .keys({
      addressOne: Joi.string().required(),
      addressTwo: Joi.string().required(),
      city: Joi.string().required(),
      email: Joi.string().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      password: Joi.string().required(),
      phone: Joi.string().required(),
      phoneType: Joi.string().required(),
      state: Joi.string().required(),
      position: Joi.string().required(),
      role: Joi.string().required(),
    })
    .options({
      allowUnknown: true,
    });
  const result = schema.validate(body);
  const { value, error } = result;
  const valid = error == null;
  if (userData.role === Roles.user) {
    return res.status(400).json({
      status: 400,
      message: 'Only admin and Manager can add user(s)',
    });
  }
  const user_list = await User.find({
    $and: [
      { companyId: userData.companyId },
      { $or: [{ role: "manager" }, { role: "user" }] }
    ]
  });
  if (user_list?.length >= Plans.basic.maxUsers && userData.plan === Plans.basic.type) {
    return res.status(400).json({
      message: 'Upgrade your plan to add more user(s)',
      statusCode: 400
    });
  } else if (user_list?.length >= Plans.professional.maxUsers && userData.plan === Plans.professional.type) {
    return res.status(400).json({
      message: 'Upgrade your plan to add more user(s)',
      statusCode: 400
    });
  } else if (user_list?.length >= Plans.business.maxUsers && userData.plan === Plans.business.type) {
    return res.status(400).json({
      message: 'You have reached the max user count',
      statusCode: 400
    });
  }
  if (!valid) {
    return res.status(400).json({
      message: 'Invalid request',
      data: body,
      error: error,
    });
  } else {
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
      let email;
      if (req.body.email) email = req.body.email.toLowerCase() || 'NA';
      let user = await User.findOne({
        email: email,
        companyId: userData.companyId,
      });
      if (user) {
        if ((email = user.email)) {
          return res.status(400).send({
            statusCode: 400,
            error: 'User already exists',
            message: "User already exists"
          });
        }
      }
      user = new User(body);
      user.email = email;
      const settings = new Settings({ userId: user._id });
      settings.save();
      if (req.body.password) {
        user.password = await bcrypt.hash(
          req.body.password,
          config.get('bcryptSalt'),
        );
      }
      const token = user.generateAuthToken();
      user.verficationToken = token;
      user.companyId = userData.companyId;
      user.companyName = userData.companyName;
      await user.save();
      company.employee.push(user._id);
      await company.save();
      const inviteToken = jwt.sign(
        {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          position: user.position,
        },
        config.get('jwtPrivateKey'),
      );
      await sendGridMail.send(
        registerAdminUserEmail(
          inviteToken,
          user.email,
          user.firstName,
          user.lastName,
          'employee',
        ),
      ).catch(e => {
        throw new Error(e)
      });
      return res
        .header('Authorization', token)
        .send({ statusCode: 200, message: 'Success', data: user });
    } catch (err) {
      return res.status(400).send({
        statusCode: 400,
        message: 'Something went wrong',
        error: err,
      });
    }
  }
};

module.exports.update = async (req, res, next) => {
  const { body, userData } = req;
  const schema = Joi.object()
    .keys({
      id: Joi.string(),
      addressOne: Joi.string().required(),
      addressTwo: Joi.string().required(),
      city: Joi.string().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      phone: Joi.string().required(),
      phoneType: Joi.string().required(),
      state: Joi.string().required()
    })
    .options({
      allowUnknown: true,
    });
  const result = schema.validate(body);
  const { value, error } = result;
  const valid = error == null;
  if (!valid) {
    res.status(400).json({
      error: 'Invalid request',
      data: body,
      message: error,
    });
  } else {
    let user;
    user = await User.findOne({
      _id: body.id,
      companyId: userData.companyId
    });
    if (!user) {
      return res.status(400).send({
        statusCode: 400,
        message: 'Failure',
        error: USER_CONSTANTS.INVALID_USER,
      });
    }

    user.addressOne = body.addressOne;
    user.addressTwo = body.addressTwo;
    user.phone = body.phone;
    user.phoneType = body.phoneType;
    if (body.position) {
      user.position = body.position;
    }
    if (body.password) {
      user.password = await bcrypt.hash(
        body.password,
        config.get('bcryptSalt'),
      );
    }
    user.city = body.city;
    user.state = body.state;
    user.firstName = body.firstName;
    user.lastName = body.lastName;
    try {
      await user.save();
    } catch (e) {
      return res.status(500).send({
        statusCode: 500,
        error: e,
        message: 'Failure here'
      });
    }
    if (body.companyName && body.companyId) {
      if (userData.role === Roles.admin) {
        let company = await Company.findById(body.companyId);
        if (!company) {
          return res.status(400).send({
            statusCode: 400,
            message: 'Failure',
            error: 'Company Not found',
          });
        }
        company.name = body.companyName;
        try {
          await company.save();
        } catch (e) {
          return res.status(500).send({
            statusCode: 500,
            message: 'Failure',
          });
        }
      } else {
        return res.status(400).json({
          status: 400,
          message: 'Only admin(s) are allowed to do this action',
        });
      }
    }
    return res.status(200).send({
      statusCode: 200,
      message: 'User and Company information updated',
      data: user,
    });
  }
};

module.exports.delete = async (req, res, next) => {
  const { id } = req.query;
  const { body, userData } = req;
  const query = { _id: id, companyId: userData.companyId };
  try {
    if (userData.role === 'admin') {
      const user = await User.findOne(query)
      const result = await User.deleteOne(query);
      const resultSchedule = await Schedule.deleteOne({ userId: id });
      if (result?.deletedCount === 1) {
        let company = await Company.findById(userData.companyId);
        if (!company) {
          return res.status(400).send({
            statusCode: 400,
            message: 'Failure',
            error: 'Company Not found',
          });
        }
        if (user.departmentId) {
          let department = await Department.findOne({ _id: user.departmentId });
          if (!department) {
            return res.status(400).send({
              statusCode: 400,
              message: 'Failure',
              error: 'Department Not found',
            });
          }
          try {
            department.employees = _.filter(department.employees, emp => emp.toString() !== id.toString());
            await department.save();
          } catch (e) {
            return res.status(400).send({
              statusCode: 400,
              message: 'Record not deleted from departments',
              body: e,
            });
          }
        }
        try {
          company.employee = _.filter(company.employee, emp => emp.toString() !== id.toString());
          await company.save()
        } catch (e) {
          return res.status(400).send({
            statusCode: 400,
            message: 'Record not deleted from company',
            body: e,
          });
        }
        return res.status(200).send({
          statusCode: 200,
          message: 'Record Deleted',
          body: 'Success',
        });
      } else {
        return res.status(400).send({
          statusCode: 400,
          message: 'Failure',
          error: USER_CONSTANTS.INVALID_USER,
        });
      }
    }
  } catch (e) {
    return res.status(500).send({
      statusCode: 500,
      message: 'Failure',
    });
  }
};

module.exports.verifyUser = async (req, res, next) => {
  const { body, userData, params } = req;
  try {
    const decoded = jwt.verify(params.token, config.get('jwtPrivateKey'));
    const user = await User.findById(decoded.userId);
    if (user) {
      if (user.isVerified) {
        return res.status(200).json({
          statusCode: 200,
          message: 'User already verified',
        });
      }
      user.isVerified = true;
      user.verficationToken = '';
      user.save();
      return res.status(200).json({
        statusCode: 200,
        message: 'User Verified',
      });
    } else {
      return res.status(400).json({
        statusCode: 400,
        message: 'User Not found',
      });
    }
  } catch (e) { }
  return res.status(500).send({
    statusCode: 500,
    message: 'Failure',
    data: 'Something Went Wrong',
  });
};

module.exports.inviteEmployee = async (req, res, next) => {
  const { body, userData, params } = req;
  const schema = Joi.object().keys({
    companyCode: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    position: Joi.string().required(),
  });
  const result = schema.validate(body);
  const { value, error } = result;
  const valid = error == null;
  if (!valid) {
    res.status(400).json({
      message: 'Invalid request',
      data: body,
      error: error.details[0].message,
    });
  } else {
    const user = User.findOne({ email: body.email });
    if (user) {
      return res.status(400).send({
        statusCode: 400,
        error: 'User already exists',
      });
    }
    try {
      const inviteToken = jwt.sign(
        {
          companyCode: body.companyCode,
          firstName: body.firstName,
          lastName: body.lastName,
          email: body.email,
          position: body.position,
        },
        config.get('jwtPrivateKey'),
      );
      await sendGridMail.send(getMessage(inviteToken, body.email));
      return res.status(200).send({
        statusCode: 200,
        message: 'Email is sent with rest of the instructions',
      });
    } catch (e) {
      return res.status(500).send({
        statusCode: 500,
        message: 'Failure',
        data: 'Something Went Wrong',
      });
    }
  }
};

module.exports.registerEmployee = async (req, res, next) => {
  const { body } = req;
  const schema = Joi.object()
    .keys({
      token: Joi.string().required(),
      password: Joi.string().required(),
    })
    .options({
      allowUnknown: true,
    });
  const result = schema.validate(body);
  const { value, error } = result;
  const valid = error == null;
  if (!valid) {
    return res.status(400).json({
      message: 'Invalid request',
      data: body,
      error: error,
    });
  } else {
    try {
      const decoded = jwt.verify(body.token, config.get('jwtPrivateKey'));
      let user = await User.findOne({ email: decoded.email });
      if (user && user.isVerified) {
        return res.status(400).send({
          statusCode: 400,
          error: 'User already registered. Please login to continue',
        });
      }
      user.addressOne = body.addressOne;
      user.addressTwo = body.addressTwo;
      user.city = body.city;
      user.password = await bcrypt.hash(
        body.password,
        config.get('bcryptSalt'),
      );
      user.isCompanyAdded = true;
      user.phone = body.phone;
      user.phoneType = body.phoneType;
      user.isVerified = true;
      user.role = body.role ? body.role : 'user';
      user.state = body.state;
      user.email = decoded.email;
      user.firstName = decoded.firstName;
      user.lastName = decoded.lastName;
      user.position = decoded.position ? decoded.position : '';
      user.imageUrl = decoded.imageUrl ? decoded.imageUrl : '';
      user.save();
      return res.status(200).json({
        message: 'User successfully registered',
        data: decoded,
        statusCode: 200,
      });
    } catch (e) {
      return res.status(500).send({
        statusCode: 500,
        message: 'Failure',
        data: 'Something Went Wrong',
        error: e,
      });
    }
  }
};

module.exports.makeManger = async (req, res, next) => {
  const { id } = req.query;
  const { body, userData } = req;
  const query = { _id: id };

  try {
    if (userData.role === 'admin') {
      if (userData.role !== 'manager') {
        const result = await User.updateOne(query, {
          $set: { role: 'manager' },
        });
        if (result) {
          return res.status(200).send({
            statusCode: 200,
            message: 'Promoted',
            body: 'Success',
          });
        } else {
          return res.status(400).send({
            statusCode: 400,
            message: 'Failure',
            error: USER_CONSTANTS.INVALID_USER,
          });
        }
      } else {
        return res.status(400).send({
          statusCode: 400,
          message: 'user Already Manager',
          error: USER_CONSTANTS.INVALID_USER,
        });
      }
    }
  } catch (e) {
    return res.status(500).send({
      statusCode: 500,
      message: 'Failure',
    });
  }
};
