const mongoose = require('mongoose');

const announcementSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 200,
    },
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
    },
    departmentName: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      ref: 'User'
    },
    companyId: {
      type: String,
      ref: 'Company'
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
);

announcementSchema.index({ content: 'text', title: 'text' });

module.exports = mongoose.model('Announcement', announcementSchema);
