const Settings = require('../models/SettingsModal');
const User = require('../models/UserModel');
const config = require('config');
const Joi = require('joi');
const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey(config.get('send_grid'));
const { subscriptionChange } = require('../utils/email');

module.exports.update = async (req, res, next) => {
  const { body, userData } = req;
  const schema = Joi.object().keys({
    reminderSetting: Joi.number().required(),
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
    const setting = await Settings.findOne({ userId: req.jwtData.userId });
    if (!setting) {
      return res.status(400).send({
        statusCode: 400,
        message: 'Failure',
        data: 'Enable to find setting!',
      });
    }
    setting.reminderSetting = body.reminderSetting;

    try {
      await setting.save();
      return res.status(200).send({
        statusCode: 200,
        message: 'Recorded Updated',
      });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        statusCode: 500,
        message: 'Failure',
      });
    }
  }
};

module.exports.upgrade = async (req, res, next) => {
  const { plan } = req.query;

  const user = await User.find().count();

  switch (plan) {
    case req.userData.plan === plan:
      allowUpgrade = false;
      allowContent = 'Same Plan';
      break;
    case 'business':
      if (req.userData.plan === 'business' || user > 100) {
        allowUpgrade = false;
        allowContent = 'Already Plan Activated';
      } else {
        allowContent = 'Plan changed';
        allowUpgrade = true;
      }
      break;
    case 'professional':
      if (
        req.userData.plan === 'professional' ||
        req.userData.plan === 'business' ||
        user > 20
      ) {
        allowUpgrade = false;
        allowContent = 'Not allow to switch';
      } else {
        allowUpgrade = true;
        allowContent = 'Plan changed';
        console.log('Allow to upgrade');
      }
      break;
    case 'basic':
      if (
        req.userData.plan === 'professional' ||
        req.userData.plan === 'business' ||
        user > 5
      ) {
        allowUpgrade = false;
        allowContent = 'Not allow to switch';
      } else {
        allowUpgrade = true;
        allowContent = 'Plan changed';
      }
      break;
    default:
      allowUpgrade = false;
      allowContent = 'Not allow';
      break;
  }

  try {
    if (req.userData.role === 'admin') {
      if (allowUpgrade) {
        await User.updateOne(
          { _id: req.userData._id },
          {
            $set: {
              plan: plan,
            },
          },
        );
        let firstName;
        let lastName;
        let email;
        let userId;
        let company;
        if (req.userData.firstName) firstName = req.userData.firstName || 'NA';
        if (req.userData.lastName) lastName = req.userData.lastName || 'NA';
        if (req.userData.email) email = req.userData.email || 'NA';
        if (req.userData._id) userId = req.userData._id || 'NA';
        if (req.userData.companyName) company = req.userData.companyName || 'NA';
        const user_obj = await User.findOne({_id: userId});
        console.log(user_obj)
        if (!user_obj) {
          return res.status(400).send({
            statusCode: 400,
            error: true,
            message: "User not found",
          });
        }
        const token = user_obj.generateAuthToken();
        user_obj.accessToken = token;
        await user_obj.save();
        await sendGridMail.send(
          subscriptionChange(email, userId, firstName, lastName, req.userData.accessToken, company),
        );
        return res.status(200).send({
          error: null,
          statusCode: 200,
          message: allowContent,
          data: plan,
        });
      } else {
        return res.status(400).send({
          statusCode: 400,
          error: true,
          message: allowContent,
        });
      }
    } else {
      return res.status(400).send({
        statusCode: 400,
        error: true,
        message: 'You are not admin',
      });
    }
  } catch (e) {
    console.log(e);
  }
};
