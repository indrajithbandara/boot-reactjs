
const envUrl = {
  production: 'http://localhost',
  stage: 'http://localhost',
  development: ''
};
export const ENV = {
  host: envUrl[process.env.NODE_ENV || 'development']
};

// mock server
export const URL = {
  // init
  user: {
    get_users: ENV.host + '/mock/user/users.json'
  }
};
