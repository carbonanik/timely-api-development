const mongoose = require('mongoose');

const companySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    department: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
      },
    ],
    employee: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
);

module.exports = mongoose.model('Company', companySchema);
