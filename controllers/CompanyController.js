const { DEFAULT_PAGINATION, DEFAULT_SORT } = require('../common');
const Company = require('../models/CompanyModal');
const User = require('../models/UserModel');
const Joi = require('joi');
const { Roles } = require('../utils/enum');

module.exports.add = async (req, res, next) => {
  const { body, userData } = req;
  const schema = Joi.object().keys({
    code: Joi.string().required(),
    name: Joi.string().min(3).max(100).required(),
  });
  const result = schema.validate(body);
  const { value, error } = result;
  const valid = error == null;
  if (!valid) {
    return res.status(400).json({
      message: 'Invalid request',
      error: error,
    });
  } else {
    if (userData.role !== Roles.admin) {
      return res.status(400).json({
        statusCode: 400,
        data: null,
        error: 'Only Admin is allowed to create company!',
      });
    }
    try {
      const findDuplicateCompany = await Company.findOne({ code: body.code });
      if (findDuplicateCompany) {
        return res.status(400).json({
          error: 'Company with same code is already added!',
          statusCode: 400,
          data: null,
        });
      }
      let company = new Company(body);
      company.userId = userData._id;
      await company.save();
      const user = await User.findById(userData._id);
      user.isCompanyAdded = true;
      user.companyId = company._id
      user.companyName = company.name
      user.save();
      return res.status(200).json({
        message: 'Successfully added',
        statusCode: 200,
        data: body,
        error: null,
      });
    } catch (e) {
      res.status(400).json({
        message: 'Some thing went wrong',
        statusCode: 400,
        data: null,
        error: e,
      });
    }
  }
};


module.exports.getCompany = async (req, res, next) => {
  const company = await Company.find()
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
    data: company,
    error: null,
  });
};

module.exports.findCompany = async (req, res, next) => {
  const { params } = req;
  var whereClause = {
    _id: params.id,
  };
  const company = await Company.findOne(whereClause)
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
    data: company,
    error: null,
  });
};