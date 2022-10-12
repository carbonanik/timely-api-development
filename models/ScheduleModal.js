const mongoose = require('mongoose');

const scheduleSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
    },
    userFirstName: {
      type: String,
      default: ''
    },
    userPosition: {
      type: String,
      default: ''
    },
    workLoad: {
      type: String,
      default: ''
    },
    smsAlert: {
      type: Boolean,
      default: false
    },
    schedule: {
      monday: {
        value: {
          type: String,
          default: ''
        },
        startTime: {
          type: String,
          default: '',
        },
        endTime: {
          type: String,
          default: '',
        },
        timezone: {
          type: String,
          default: '',
        },
        sendReminder: {
          type: Boolean,
          default: true,
        },
      },
      tuesday: {
        value: {
          type: String,
          default: ''
        },
        startTime: {
          type: String,
          default: '',
        },
        endTime: {
          type: String,
          default: '',
        },
        timezone: {
          type: String,
          default: '',
        },
        sendReminder: {
          type: Boolean,
          default: true,
        },
      },
      wednesday: {
        value: {
          type: String,
          default: ''
        },
        startTime: {
          type: String,
          default: '',
        },
        endTime: {
          type: String,
          default: '',
        },
        timezone: {
          type: String,
          default: '',
        },
        sendReminder: {
          type: Boolean,
          default: true,
        },
      },
      thursday: {
        value: {
          type: String,
          default: ''
        },
        startTime: {
          type: String,
          default: '',
        },
        endTime: {
          type: String,
          default: '',
        },
        timezone: {
          type: String,
          default: '',
        },
        sendReminder: {
          type: Boolean,
          default: true,
        },
      },
      friday: {
        value: {
          type: String,
          default: ''
        },
        startTime: {
          type: String,
          default: '',
        },
        endTime: {
          type: String,
          default: '',
        },
        timezone: {
          type: String,
          default: '',
        },
        sendReminder: {
          type: Boolean,
          default: true,
        },
      },
      saturday: {
        value: {
          type: String,
          default: ''
        },
        startTime: {
          type: String,
          default: '',
        },
        endTime: {
          type: String,
          default: '',
        },
        timezone: {
          type: String,
          default: '',
        },
        sendReminder: {
          type: Boolean,
          default: true,
        },
      },
      sunday: {
        value: {
          type: String,
          default: ''
        },
        startTime: {
          type: String,
          default: '',
        },
        endTime: {
          type: String,
          default: '',
        },
        timezone: {
          type: String,
          default: '',
        },
        sendReminder: {
          type: Boolean,
          default: true,
        },
      },
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
);

module.exports = mongoose.model('Schedule', scheduleSchema);
