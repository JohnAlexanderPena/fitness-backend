const Validator = require('validator');
const isEmpty = require('./is-empty.js');


module.exports  = function validateRegisterInput(data){
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : ''; //stringify Name
  data.email = !isEmpty(data.email) ? data.email : ''; //stringify email
  data.password = !isEmpty(data.password) ? data.password : ''; // stringify pwd.
  data.password2 = !isEmpty(data.password2) ? data.password2 : ''; // stringify pwd.
  data.image = !isEmpty(data.image) ? data.image : ''; // stringify pwd.

  // data.zipcode = !isEmpty(data.z ipcode) ? data.zipcode : ''; // stringify zipcode


  if(!Validator.isLength(data.name, {min: 2, max: 30})) {
    errors.name = 'Name must be between 2 and 30 characters'
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required'
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required'
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid '
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required'
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30})) {
    errors.password = 'Password must be between 6 and 30 characters'
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required'
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match'
  }

  // if (Validator.isEmpty(data.zipcode)) {
  //   errors.zipcode = 'Zip Code field is required'
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
