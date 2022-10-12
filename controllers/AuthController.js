const { AUTH_CONSTANTS } = require('../config/constant.js');
const User = require('../models/UserModel');
const Token = require('../models/TokenModel');
const {
  requestPasswordResetMail,
  passwordChangeSuccess,
} = require('../utils/email');
const Joi = require('joi');
const config = require('config');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey(config.get('send_grid'));

module.exports.login = async (req, res, next) => {
  const { body, userData } = req;
  const schema = Joi.object().keys({
    email: Joi.string().min(5).max(255).required(),
    password: Joi.string().min(5).max(255).required(),
  });
  const result = schema.validate(body);
  const { value, error } = result;
  const valid = error == null;
  if (!valid) {
    return res.status(400).json({
      message: 'Invalid request',
      error: error.details[0].message,
    });
  } else {
    let email = req.body.email.toLowerCase();
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).send({
        statusCode: 400,
        message: 'Failure',
        error: AUTH_CONSTANTS.INVALID_CREDENTIALS,
      });
    }
    if (!user.isVerified) {
      return res.status(400).send({
        statusCode: 400,
        message: 'Failure',
        error: "User Not verified. Verify your account from email",
      });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password,
    );
    if (!validPassword) {
      return res.status(400).send({
        statusCode: 400,
        message: 'Failure',
        error: AUTH_CONSTANTS.INVALID_CREDENTIALS,
      });
    }
    const token = user.generateAuthToken();
    user.accessToken = token;
    await user.save();
    return res
      .header('Authorization', token)
      .send({ statusCode: 200, message: 'Success', data: { token: token } });
  }
};

module.exports.refreshToken = async (req, res, next) => {
  const { userData } = req;
  try {
    const email = userData.email.toLowerCase();
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        message: 'User does not exists!',
        statusCode: 400,
        data: null,
      });
    }
    const token = user.generateAuthToken();
    user.accessToken = token;
    await user.save();
    return res
      .status(200)
      .header('Authorization', token)
      .send({ statusCode: 200, message: 'Success', data: { token: token } });
  } catch (e) {
    return res.status(500).json({
      message: 'Some thing went wrong',
      statusCode: 500,
      data: null,
      error: e,
    });
  }
};

module.exports.requesPasswordReset = async (req, res, next) => {
  const { body } = req;
  const schema = Joi.object().keys({
    email: Joi.string().required(),
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
    try {
      let user = await User.findOne({ email: body.email });
      if (!user) {
        return res.status(400).json({
          message: 'Failure',
          data: 'User not found',
        });
      }
      let token = await Token.findOne({ userId: user._id });
      if (token) {
        await token.deleteOne();
      }
      const resetToken = crypto.randomBytes(32).toString('hex');
      console.log(resetToken);
      const hash = await bcrypt.hash(resetToken, config.get('bcryptSalt'));
      await new Token({
        userId: user._id,
        token: hash,
        createdAt: Date.now(),
      }).save();
      await sendGridMail.send(
        requestPasswordResetMail(
          hash,
          user.email,
          user._id,
          user?.firstName,
          user?.lastName,
        ),
      );
      return res.status(200).send({
        statusCode: 200,
        message: 'Success',
        data: 'Please Check email',
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

module.exports.resetPassword = async (req, res, next) => {
  const { body } = req;
  const schema = Joi.object().keys({
    userId: Joi.string().required(),
    password: Joi.string().required(),
    token: Joi.string().required(),
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
    try {
      let passwordResetToken = await Token.findOne({ userId: body.userId });
      if (!passwordResetToken) {
        return res.status(400).json({
          message: 'Invalid request',
          error: 'Token is not correct',
          
        });
      }

      if (body.token !== passwordResetToken.token) {
        return res.status(400).json({
          message: 'Invalid request',
          error: 'Token is not correct',
        });
      }
      const hash = await bcrypt.hash(body.password, config.get('bcryptSalt'));
      const user = await User.findById(body.userId);
      user.password = hash;
      user.save();
      await sendGridMail.send(
        passwordChangeSuccess(user.email, user.firstName, user.lastName),
      );
      return res.status(200).send({
        statusCode: 200,
        message: 'Success',
        data: 'Password Changed Sucessfully!',
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

module.exports.changePassword = async (req, res, next) => {
  const { userData, body } = req;
  const schema = Joi.object().keys({
    currentPassword: Joi.string().required(),
    password: Joi.string().required(),
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
    try {
      let user = await User.findOne({ email: userData.email });
      if (!user) {
        return res.status(400).json({
          message: 'Invalid request',
          error: 'Invalid Request',
        });
      }
      const validPassword = await bcrypt.compare(
        body.currentPassword,
        user.password,
      );
      if (!validPassword) {
        return res.status(400).send({
          statusCode: 400,
          message: 'Failure',
          error: 'Current Password is wrong',
        });
      }
      if (body.currentPassword === body.password) {
        return res.status(400).send({
          statusCode: 400,
          message: 'Failure',
          error: 'Current Password and new password should not be same',
        });
      }
      const hash = await bcrypt.hash(body.password, config.get('bcryptSalt'));
      user.password = hash;
      user.save();
      await sendGridMail.send(
        passwordChangeSuccess(user.email, user.firstName, user.lastName),
      );
      return res.status(200).send({
        statusCode: 200,
        message: 'Success',
        data: 'Password Changed Sucessfully!',
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
