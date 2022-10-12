const mongoose = require('mongoose');

const settingsSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    reminderSetting: {
      type: Number,
      default: 15,
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
);

module.exports = mongoose.model('Settings', settingsSchema);
