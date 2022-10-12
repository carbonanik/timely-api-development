const SYSTEM_FAILURE = 'Something failed.';
const INVALID_USER = 'No user registered with given Id';
const INVALID_PROVIDER = 'No provider registered with given Id';
const INACTIVE_ACCOUNT =
  'Account is not active. Please get in touch with app admin.';
// middleware auth
const MIDDLEWARE_AUTH_CONSTANTS = {
  ACCESS_DENIED: 'Access denied. No authorization token provided',
  RESOURCE_FORBIDDEN: "You don't have access to the request resource.",
  INVALID_AUTH_TOKEN: 'Invalid token',
};

// admins.js
const ADMIN_CONSTANTS = {
  INVALID_EMAIL: 'Invalid username/password.',
  NOTIFICATION_SUCCESS: 'Notificaiton submitted successfully',
};

// auth.js
const AUTH_CONSTANTS = {
  INVALID_USER: INVALID_USER,
  INVALID_CREDENTIALS: 'Invalid email/userName or password',
  INVALID_PASSWORD:
    'You have entered incorrect old password. Please try again with valid password.',
  INACTIVE_ACCOUNT: INACTIVE_ACCOUNT,
  CONTACT_ADMIN: 'Your account is in blocked state.Please Contact Admin ',
  CHANGE_PASSWORD_REQUEST_SUCCESS:
    'Password recovery link has been sent to your registered email.',
  CHANGE_PASSWORD_REQUEST_EMAIL_FAILURE:
    'Email sending failed due to some application issue.',
  INVALID_EMAIL:
    'The email provided is not registered. Please sign up to continue.',
  INVALID_RECOVERY_LINK: 'Password link expired or not valid.',
  PASSWORD_CHANGE_SUCCESS: 'Password changed succesfully',
  INVALID_OTP: 'Invalid OTP passed',
  INVALID_MOBILE: 'No user found with given mobile number.',
  MOBILE_REQUIRED: '"mobile" is required',
  OTP_TOKEN_REQUIRED: '"otpToken" is required',
  SYSTEM_FAILURE: SYSTEM_FAILURE,
};

// courseDetails.js & courses.js
const CARD_CONSTANTS = {
  INVALID_USER: INVALID_USER,
  INVALID_CARD: 'Card with given Id not found',
  SET_DEFAULT: 'Card set as default',
  CARD_REQUIRED: 'cardId is mandatory parameter',
  CARD_ADDING_FAILED: 'Card addition failed.',
  CARD_DELETE_SUCCESS: 'Card removed successfully',
};

// settings.js
const SETTING_CONSTANTS = {
  INVALID_USER: INVALID_USER,
};

// users.js
const USER_CONSTANTS = {
  INACTIVE_ACCOUNT: INACTIVE_ACCOUNT,
  INVALID_USER: INVALID_USER,
  MOBILE_EMAIL_ALREADY_EXISTS: 'Mobile and email are already registered',
  EMAIL_ALREADY_EXISTS: 'Email already registered',
  MOBILE_ALREADY_EXISTS: 'Mobile number already registered',
  USERNAME_ALREADY_EXISTS: 'UserName already registered',
  ALL_CHECKS_VALID: 'All check are valid. Proceed for OTP',
  INVALID_OTP: 'Invalid OTP passed',
  OTP_MISSING: 'No OTP passed. OTP is required for registration.',
  LOGGED_OUT: 'Logged Out successfully',
  VERIFICATION_SUCCESS: 'Continue for OTP.',
};

module.exports.SYSTEM_FAILURE = SYSTEM_FAILURE;
module.exports.MIDDLEWARE_AUTH_CONSTANTS = MIDDLEWARE_AUTH_CONSTANTS;
module.exports.AUTH_CONSTANTS = AUTH_CONSTANTS;
module.exports.ADMIN_CONSTANTS = ADMIN_CONSTANTS;

module.exports.USER_CONSTANTS = USER_CONSTANTS;

module.exports.SETTING_CONSTANTS = SETTING_CONSTANTS;

module.exports.FRONTEND_URL = 'http://localhost:3000';
