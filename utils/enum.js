const Roles = {
  user: 'user',
  manager: 'manager',
  admin: 'admin',
};

const Plans = {
  basic: {
    type: 'basic',
    maxUsers: 5,
  },
  professional: {
    type: 'professional',
    maxUsers: 20,
  },
  business: {
    type: 'business',
    maxUsers: 100,
  },
};

module.exports = {
  Roles,
  Plans,
};
