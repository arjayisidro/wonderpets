const Validator = require('validator');
const isEmpty = require('lodash/isEmpty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.userName = !isEmpty(data.userName) ? data.userName : '';
  data.email = !isEmpty(data.emailAddress) ? data.emailAddress : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email address is invalid.';
  }

  if (Validator.isEmpty(data.userName)) {
    errors.userName = 'Please enter your preferred Username.';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Please enter your Email Address.';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Please enter your preferred Password.';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
