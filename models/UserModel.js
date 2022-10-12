const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');

const userSchema = mongoose.Schema(
  {
    addressOne: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
    },
    accessToken: { type: String, default: '' },
    verficationToken: { type: String, default: '' },
    addressTwo: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
    },
    creationDate: {
      type: Date,
      default: () => {
        return new Date();
      },
    },
    city: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 100,
    },
    phone: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
    },
    phoneType: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
    },
    state: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
    },
    stripeID: {
      type: String,
      minlength: 3,
      maxlength: 500,
    },
    role: {
      type: String,
      enum: ['user', 'manager', 'admin'],
      default: 'admin',
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isCompanyAdded: {
      type: Boolean,
      default: false,
    },
    imageUrl: {
      type: String,
      default: '',
    },
    position: {
      type: String,
      default: '',
    },
    plan: {
      type: String,
      default: '',
    },
    companyName: {
      type: String,
      default: '',
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
    },
    departmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Department',
    },
    departmentName: {
      type: String,
      default: '',
    },
    scheduleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Schedule',
    },
    scheduleDetails: {
      type: Object,
      default: ''
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
);

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      userId: this._id,
      role: this.role,
      stripeID: this.stripeID,
      fullName: this.firstName + ", " + this.lastName,
      isCompanyAdded: this.isCompanyAdded,
      plan: this.plan,
      companyId: this.companyId,
      companyName: this.companyName
    },
    config.get('jwtPrivateKey'),
  );
  return token;
};

userSchema.index({ firstName: 'text' });

module.exports = mongoose.model('User', userSchema);
