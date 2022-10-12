const config = require('config');
const { DEFAULT_PAGINATION, DEFAULT_SORT } = require('../common');
const Announcement = require('../models/AnnouncementModel');
const Department = require('../models/DepartmentModel');
const Joi = require('joi');
const { Roles } = require('../utils/enum');
const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey(config.get('send_grid'));
const Company = require('../models/CompanyModal');
const { announcementEmail } = require('../utils/email');
const sendSMS = require('../utils/sms')

const { RestClient } = require('@signalwire/node')
const client = new RestClient(config.get('relay_project_key'), config.get('relay_token'), { signalwireSpaceUrl: 'timely.signalwire.com' })

module.exports.addAnnouncement = async (req, res, next) => {
  const { body, userData } = req;
  const schema = Joi.object().keys({
    content: Joi.string().required(),
    title: Joi.string().required(),
    departmentId: Joi.string().required()
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
    if (userData.role === Roles.user) {
      return res.status(400).json({
        message: '',
        statusCode: 400,
        data: null,
        error: 'Only Admin or Manager is allowed to add announcements!',
      });
    }
    let announcements;
    announcements = new Announcement(body);
    const department = await Department.findOne({ _id: body.departmentId });
    announcements.departmentName = department.name;
    announcements.userId = userData._id;
    announcements.companyId = userData.companyId;
    try {
      await announcements.save();
      const company = await Company.findById(
        userData.companyId,
      ).populate('employee', 'email firstName lastName phone');
      if (!company) {
        return res.status(400).json({
          message: 'Company Not found',
          statusCode: 400,
          data: null,
          error: e,
        });
      }
      company.employee.forEach(async (user) => {
        try {
          sendSMS({ body: body.content, to: user.phone })
        } catch (e) {
          console.log(e)
        }
        await sendGridMail.send(
          announcementEmail(
            body.title,
            body.content,
            user.email,
            user.firstName,
            user.lastName,
          ),
        );
      });
      return res.status(200).json({
        message: 'successfully inserted',
        statusCode: 200,
        data: body,
        error: null,
      });
    } catch (e) {
      return res.status(400).json({
        message: 'Some thing went wrong',
        statusCode: 400,
        data: null,
        error: e,
      });
    }
  }
};

module.exports.getAnnouncement = async (req, res, next) => {
  const { pageNumber, pageSize, dept, day, searchValue, sortBy, type, sortOrder } =
    req.query;
  const { body, userData } = req;

  const limit = parseInt(pageSize || DEFAULT_PAGINATION.LIMIT);
  const offset =
    pageNumber >= 0 ? limit * (pageNumber - 1) : DEFAULT_PAGINATION.OFFSET;
  const orderColumn = sortBy || DEFAULT_SORT.COLUMN;
  const orderType = sortOrder || DEFAULT_SORT.ORDER;
  const seac = searchValue ? searchValue : null;
  const dayValue = day ? day : 'today';

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

  const query =
    day && dept && searchValue
      ? {
        $and: [
          { companyId: userData.companyId },
          { created_at: from },
          { departmentName: dept },
          { $text: { $search: seac } },
        ],
      }
      : day && dept
        ? { $and: [{ companyId: userData.companyId }, { created_at: from }, { departmentName: dept }] }
        : dayValue
          ? [{ companyId: userData.companyId }, { created_at: from }]
          : null;

  const queryALL = type && day
    ? { $and: [{ companyId: userData.companyId }, { created_at: from }] }
    : { $and: [{ companyId: userData.companyId }, { created_at: { $exists: true } }] }

  try {
    if (type === 'all') {
      const announcements = await Announcement.find(queryALL).sort('-created_at');
      const count = await Announcement.find({ $and: [{ companyId: userData.companyId }, { created_at: { $exists: true } }] }).count();
      return res.status(200).json({
        message: 'Success',
        statusCode: 200,
        data: {
          list: announcements,
          count: count
        },
        error: null,
      });
    }
    const totalCount = await Announcement.find().count();
    const count = await Announcement.find(query).count();
    const announcements = await Announcement.find(query)
      .sort('-created_at')
      .limit(limit)
      .skip(offset)
      .exec()
      .catch((err) => {
        return res.status(400).json({
          message: 'Something went wrong',
          err,
          statusCode: 400,
        });
      });

    return res.status(200).json({
      message: 'Success',
      statusCode: 200,
      data: {
        count,
        announcements,
        totalCount
      },
      error: null,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Failed to fetch announcement',
      statusCode: 500,
      error: err,
    });
  }
};

module.exports.delete = async (req, res, next) => {
  const { body, userData, params } = req;
  var whereClause = {
    _id: params.id,
  };

  Announcement.findOne(whereClause)
    .exec()
    .then((Data) => {
      if (!Data) {
        return res.status(404).json({
          message: 'record not found',
          statusCode: 404,
          data: null,
          error: null,
        });
      } else {
        Data.deleted_at = new Date();
        Data.save();

        return res.status(200).json({
          message: 'Record has been deleted successfully!',
          statusCode: 200,
          data: body,
          error: null,
        });
      }
    });
};
