const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema(
  {
    description: {
      type: String,
      minlength: 0,
      maxlength: 500,
    },
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
    },
    userId: {
      type: String,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
    },
    employees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
      },
    ],
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
);

module.exports = mongoose.model('Department', departmentSchema);
