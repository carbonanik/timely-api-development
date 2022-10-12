const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema(
  {
    imageUrl: {
      type: String,
      default: '',
    },
    position: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
);

module.exports = mongoose.model('Employee', employeeSchema);
