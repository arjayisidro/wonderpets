const Validator = require('validator');
const isEmpty = require('lodash/isEmpty');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.emailAddress) ? data.emailAddress : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isEmail(data.emailAddress)) {
    errors.email = 'Email address is invalid.';
  }

  if (Validator.isEmpty(data.emailAddress)) {
    errors.email = 'Please enter your Email Address.';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Please enter your Password';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
