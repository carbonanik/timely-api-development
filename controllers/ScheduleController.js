const { DEFAULT_PAGINATION, DEFAULT_SORT } = require('../common');
const Schedule = require('../models/ScheduleModal');
const Joi = require('joi');
const { Roles } = require('../utils/enum');
const { cloneDeep } = require('lodash');
const User = require('../models/UserModel');
const sendSMS = require('../utils/sms.js')

timeDiff = (start, end) => {
  if (start && end) {
    var smon = String(start);
    var fmon = String(end);
    var diff = 0;
    if (smon && fmon) {
      smon = ConvertToSeconds(smon);
      fmon = ConvertToSeconds(fmon);
      if (smon > fmon) {
        return -1
      }
      diff = Math.abs(fmon - smon);
      return secondsTohhmmss(diff)
    }
    function ConvertToSeconds(time) {
      var splitTime = time.split(":");
      return splitTime[0] * 3600 + splitTime[1] * 60;
    }
    function secondsTohhmmss(secs) {
      var hours = parseInt(secs / 3600);
      var seconds = parseInt(secs % 3600);
      var minutes = parseInt(seconds / 60);
      return `${hours}.${minutes}`;
    }
  } else {
    return -2
  }
}

module.exports.add = async (req, res, next) => {
  const { body, userData } = req;
  const schema = Joi.object().keys({
    userId: Joi.string(),
    schedule: Joi.object()
      .keys(
        {
          monday: Joi.object().keys({
            value: Joi.string(),
            startTime: Joi.string(),
            endTime: Joi.string(),
            timezone: Joi.string(),
            sendReminder: Joi.boolean(),
          }),
          tuesday: Joi.object().keys({
            value: Joi.string(),
            startTime: Joi.string(),
            endTime: Joi.string(),
            timezone: Joi.string(),
            sendReminder: Joi.boolean(),
          }),
          wednesday: Joi.object().keys({
            value: Joi.string(),
            startTime: Joi.string(),
            endTime: Joi.string(),
            timezone: Joi.string(),
            sendReminder: Joi.boolean(),
          }),
          thursday: Joi.object().keys({
            value: Joi.string(),
            startTime: Joi.string(),
            endTime: Joi.string(),
            timezone: Joi.string(),
            sendReminder: Joi.boolean(),
          }),
          friday: Joi.object().keys({
            value: Joi.string(),
            startTime: Joi.string(),
            endTime: Joi.string(),
            timezone: Joi.string(),
            sendReminder: Joi.boolean(),
          }),
          saturday: Joi.object().keys({
            value: Joi.string(),
            startTime: Joi.string(),
            endTime: Joi.string(),
            timezone: Joi.string(),
            sendReminder: Joi.boolean(),
          }),
          sunday: Joi.object().keys({
            value: Joi.string(),
            startTime: Joi.string(),
            endTime: Joi.string(),
            timezone: Joi.string(),
            sendReminder: Joi.boolean(),
          }),
        })
  });

  const result = schema.validate(body);
  const { value, error } = result;
  const valid = error == null;
  if (!valid) {
    res.status(400).json({
      message: 'Invalid request',
      error: error.details[0].message,
    });
  } else {
    try {
      const monday = body?.schedule?.monday?.value == 'OFF' ? 'OFF' : parseFloat(timeDiff(body?.schedule.monday?.startTime, body?.schedule.monday?.endTime))
      const tuesday = body?.schedule?.tuesday?.value == 'OFF' ? 'OFF' : parseFloat(timeDiff(body?.schedule.tuesday?.startTime, body?.schedule.tuesday?.endTime))
      const wednesday = body?.schedule?.wednesday?.value == 'OFF' ? 'OFF' : parseFloat(timeDiff(body?.schedule.wednesday?.startTime, body?.schedule.wednesday?.endTime))
      const thursday = body?.schedule?.thursday?.value == 'OFF' ? 'OFF' : parseFloat(timeDiff(body?.schedule.thursday?.startTime, body?.schedule.thursday?.endTime))
      const friday = body?.schedule?.friday?.value == 'OFF' ? 'OFF' : parseFloat(timeDiff(body?.schedule.friday?.startTime, body?.schedule.friday?.endTime))
      const saturday = body?.schedule?.saturday?.value == 'OFF' ? 'OFF' : parseFloat(timeDiff(body?.schedule.saturday?.startTime, body?.schedule.saturday?.endTime))
      const sunday = body?.schedule?.sunday?.value == 'OFF' ? 'OFF' : parseFloat(timeDiff(body?.schedule.sunday?.startTime, body?.schedule.sunday?.endTime))

      var arr = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];
      let workLoad = 0;
      arr.map(item => {
        if (item === -2) {
          return res.status(400).json({
            statusCode: 400,
            message: 'Invalid request',
            error: 'Time Should be Selected',
            data: null
          });
        }
        else if (item === -1) {
          return res.status(400).json({
            statusCode: 400,
            message: 'Invalid request',
            error: 'Time Should not be in Negative',
            data: null
          });
        }
        else if (typeof (item) === 'number') {
          workLoad += item
        }
      })
      const users = await User.findById(body.userId);

      let schedule = await new Schedule({
        ...body,
        userPosition: users.position,
        userId: body.userId,
        workLoad: workLoad,
        userFirstName: users.firstName,
        companyId: users.companyId
      });
      await schedule.save();
      users.scheduleId = schedule._id;
      users.scheduleDetails = {
        scheduleUpdate: schedule.updated_at,
        schedule: body.schedule,
        workLoad: schedule.workLoad,
        smsAlert: schedule.smsAlert ? schedule.smsAlert : false,
      }
      users.save();
      return res.status(200).json({
        message: 'successfully created schedule for the user.',
        statusCode: 200,
        data: body,
        error: null,
      });
    } catch (e) {
      res.status(500).json({
        message: 'some thing went wrong',
        statusCode: 500,
        data: null,
        error: e,
      });
    }
  }
};

module.exports.smsAlert = async (req, res, next) => {
  const { body, userData } = req;
  if (userData.role !== 'admin') {
    return res.status(400).json({
      statusCode: 400,
      message: 'Admin Only',
      error: "You are not Admin"
    })
  }
  try {
    let schedule = await Schedule.findOne({ userId: body.userId });
    let users = await User.findById(body.userId);
    if (!schedule) {
      console.log('Schedule Not found')
      return res.status(400).json({
        message: 'Schedule Not found',
        error: '',
      });
    }
    const scheduleDetails = users.scheduleDetails
    schedule.smsAlert = body.smsAlert
    await schedule.save();
    users.scheduleDetails = {
      scheduleUpdate: scheduleDetails.scheduleUpdate,
      schedule: scheduleDetails.schedule,
      workLoad: scheduleDetails.workLoad,
      smsAlert: body.smsAlert,
    }
    await users.save();
    if (schedule.smsAlert) {
      sendSMS({ to: users.phone, body: 'Message' })
      // Your Schedule Details are :
      // Monday :
      //  Start Time - ${tConv24(scheduleDetails.schedule.monday.startTime)}
      //  End Time - ${tConv24(scheduleDetails.schedule.monday.endTime)},
      // Tuesday :
      //  Start Time - ${tConv24(scheduleDetails.schedule.tuesday.startTime)}
      //  End Time - ${tConv24(scheduleDetails.schedule.tuesday.endTime)}
      // Wednesday :
      //  Start Time - ${tConv24(scheduleDetails.schedule.wednesday.startTime)}
      //  End Time - ${tConv24(scheduleDetails.schedule.wednesday.endTime)}
      // Thursday :
      //  Start Time - ${tConv24(scheduleDetails.schedule.thursday.startTime)}
      //  End Time - ${tConv24(scheduleDetails.schedule.thursday.endTime)}
      // Friday :
      //  Start Time - ${tConv24(scheduleDetails.schedule.friday.startTime)}
      //  End Time - ${tConv24(scheduleDetails.schedule.friday.endTime)}
      // Saturday :
      //  Start Time - ${tConv24(scheduleDetails.schedule.saturday.startTime)}
      //  End Time - ${tConv24(scheduleDetails.schedule.saturday.endTime)}
      // Sunday :
      //  Start Time - ${tConv24(scheduleDetails.schedule.sunday.startTime)}
      //  End Time - ${tConv24(scheduleDetails.schedule.sunday.endTime)}
      // `

      return res.status(200).json({
        message: 'successfully Updated',
        statusCode: 200,
        data: 'SMS alert Activated',
        error: null,
      });
    } else {
      return res.status(200).json({
        message: 'successfully Updated',
        statusCode: 200,
        data: 'SMS alert Deactivated',
        error: null,
      });
    }
  } catch (e) {
    res.status(500).json({
      message: 'some thing went wrong',
      statusCode: 500,
      data: null,
      error: e,
    });
  }
}

module.exports.update = async (req, res, next) => {
  const { body, userData } = req;
  console.log(body)
  const schema = Joi.object().keys({
    userId: Joi.string(),
    schedule: Joi.object()
      .keys({
        monday: Joi.object().keys({
          value: Joi.string(),
          startTime: Joi.string(),
          endTime: Joi.string(),
          timezone: Joi.string(),
          sendReminder: Joi.boolean(),
        }),
        tuesday: Joi.object().keys({
          value: Joi.string(),
          startTime: Joi.string(),
          endTime: Joi.string(),
          timezone: Joi.string(),
          sendReminder: Joi.boolean(),
        }),
        wednesday: Joi.object().keys({
          value: Joi.string(),
          startTime: Joi.string(),
          endTime: Joi.string(),
          timezone: Joi.string(),
          sendReminder: Joi.boolean(),
        }),
        thursday: Joi.object().keys({
          value: Joi.string(),
          startTime: Joi.string(),
          endTime: Joi.string(),
          timezone: Joi.string(),
          sendReminder: Joi.boolean(),
        }),
        friday: Joi.object().keys({
          value: Joi.string(),
          startTime: Joi.string(),
          endTime: Joi.string(),
          timezone: Joi.string(),
          sendReminder: Joi.boolean(),
        }),
        saturday: Joi.object().keys({
          value: Joi.string(),
          startTime: Joi.string(),
          endTime: Joi.string(),
          timezone: Joi.string(),
          sendReminder: Joi.boolean(),
        }),
        sunday: Joi.object().keys({
          value: Joi.string(),
          startTime: Joi.string(),
          endTime: Joi.string(),
          timezone: Joi.string(),
          sendReminder: Joi.boolean(),
        }),
      })
      .required(),
  });

  const result = schema.validate(body);
  const { value, error } = result;
  const valid = error == null;
  if (!valid) {
    res.status(400).json({
      message: 'Invalid request',
      error: error.details[0].message,
    });
  } else {
    const monday = body?.schedule?.monday?.value == 'OFF' ? 'OFF' : parseFloat(timeDiff(body?.schedule.monday?.startTime, body?.schedule.monday?.endTime))
    const tuesday = body?.schedule?.tuesday?.value == 'OFF' ? 'OFF' : parseFloat(timeDiff(body?.schedule.tuesday?.startTime, body?.schedule.tuesday?.endTime))
    const wednesday = body?.schedule?.wednesday?.value == 'OFF' ? 'OFF' : parseFloat(timeDiff(body?.schedule.wednesday?.startTime, body?.schedule.wednesday?.endTime))
    const thursday = body?.schedule?.thursday?.value == 'OFF' ? 'OFF' : parseFloat(timeDiff(body?.schedule.thursday?.startTime, body?.schedule.thursday?.endTime))
    const friday = body?.schedule?.friday?.value == 'OFF' ? 'OFF' : parseFloat(timeDiff(body?.schedule.friday?.startTime, body?.schedule.friday?.endTime))
    const saturday = body?.schedule?.saturday?.value == 'OFF' ? 'OFF' : parseFloat(timeDiff(body?.schedule.saturday?.startTime, body?.schedule.saturday?.endTime))
    const sunday = body?.schedule?.sunday?.value == 'OFF' ? 'OFF' : parseFloat(timeDiff(body?.schedule.sunday?.startTime, body?.schedule.sunday?.endTime))

    var arr = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];
    let workLoad = 0;
    try {

      arr.map(item => {
        if (item === -2) {
          return res.status(400).send({
            statusCode: 400,
            message: 'Invalid request',
            error: 'Time Should be Selected'
          });
        }
        else if (item === -1) {
          return res.status(400).send({
            statusCode: 400,
            message: 'Invalid request',
            error: 'Time Should not be in Negative'
          });
        }
        else if (typeof (item) === 'number') {
          workLoad += item
        }
      })

      let schedule = await Schedule.findOne({ userId: body.userId });
      const users = await User.findById(body.userId);
      if (!schedule) {
        return res.status(400).send({
          message: 'Schedule Not found',
          error: 'Schedule Not found',
        });
      }
      schedule.schedule = { ...body.schedule };
      schedule.workLoad = workLoad.toFixed(2);
      await schedule.save();
      users.scheduleDetails = {
        scheduleUpdate: schedule.updated_at,
        schedule: body.schedule,
        workLoad: schedule.workLoad,
        companyId: users.companyId,
        smsAlert: schedule.smsAlert ? schedule.smsAlert : false
      }
      await users.save();
      return res.status(200).json({
        message: 'successfully Updated',
        statusCode: 200,
        data: body,
        error: null,
      });
    } catch (e) {
      // res.status(500).json({
      //   message: 'some thing went wrong',
      //   statusCode: 500,
      //   data: null,
      //   error: e,
      // });
      console.log(e)
    }
  }
};

module.exports.get = async (req, res, next) => {
  const { userData } = req;
  const { companyId, pageNumber, pageSize, sortBy, type, sortOrder } = req.query;
  const limit = parseInt(pageSize || DEFAULT_PAGINATION.LIMIT);
  const offset =
    pageNumber >= 0 ? limit * (pageNumber - 1) : DEFAULT_PAGINATION.OFFSET;

  const query = companyId ? { companyId: companyId } : { created_at: { $exists: true } }
  try {
    const all_schedules = await Schedule.find(query).sort({ updated_at: -1 });
    const schedule = await Schedule.find(query)
      .sort('-created_at')
      .limit(limit)
      .skip(offset)
      .exec()
      .catch((err) => {
        return res.status(400).json({
          message: 'Something went wrong',
          err,
          statusCode: 400,
        })
      });
    if (!schedule) {
      return res.status(400).json({
        message: 'Schedule Not found',
        error: '',
      });
    }
    return res.status(200).json({
      error: '',
      message: 'Sucess',
      data: {
        schedule: schedule,
        totalCount: all_schedules.length,
        latest_activity: all_schedules[0]?.updated_at
      },
      result: true,
      statusCode: 200,
    });
  } catch (e) {
    return res.status(400).json({
      message: 'some thing went wrong',
      statusCode: 400,
      data: null,
      error: e,
    });
  }
};

module.exports.getScheduleEmployess = async (req, res, next) => {
  const { userData } = req;
  if (userData === Roles.user) {
    return res.status(400).json({
      status: 400,
      message: 'Only admin or Manager can access this',
      error: '',
    });
  }
  try {
    const schedule = await Schedule.findOne({ userId: req.userData._id });
    if (!schedule) {
      return res.status(400).json({
        message: 'Schedule Not found',
        error: '',
      });
    }
    return res.status(400).json({
      status: 200,
      message: 'Sucess',
      data: schedule,
      error: '',
    });
  } catch (e) {
    return res.status(400).json({
      message: 'some thing went wrong',
      statusCode: 400,
      data: null,
      error: e,
    });
  }
};
