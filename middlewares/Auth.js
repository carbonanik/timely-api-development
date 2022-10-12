const { MIDDLEWARE_AUTH_CONSTANTS } = require('../config/constant.js');
const jwt = require('jsonwebtoken');
const config = require('config');
const mongoose = require('mongoose');
const User = require('../models/UserModel');
const Company = require('../models/CompanyModal');

userAuth = async function (req, res, next) {
  if (!config.get('requiresAuth')) return next();
  const token = req.header('Authorization');

  if (!token)
    return res.status(401).send({
      statusCode: 401,
      message: 'Failure',
      data: MIDDLEWARE_AUTH_CONSTANTS.ACCESS_DENIED,
    });

  try {
    const decoded = jwt.verify(
      token.split(' ')[1],
      config.get('jwtPrivateKey'),
    );
    req.jwtData = decoded;

    let user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).send({
        statusCode: 401,
        message: 'Failure',
        data: MIDDLEWARE_AUTH_CONSTANTS.ACCESS_DENIED,
      });
    }
    let company = await Company.findOne({
      employee: { $all: [decoded.userId] },
    });
    if (company) {
      req.companyData = {
        companyCode: company.code,
        companyName: company.name,
      };
    }

    req.userData = user;

    next();
  } catch (ex) {
    res.status(401).send({
      statusCode: 401,
      message: 'Failure',
      data: MIDDLEWARE_AUTH_CONSTANTS.INVALID_AUTH_TOKEN,
    });
  }
};

module.exports.userAuth = userAuth;
