const name_errors = {
  required_error: "ERROR(Missing): Name is required for signup ",
  invalid_type: "ERROR(Invalid Type): Name should be of the string data type",
  min_length: "ERROR(Invalid Length): Name should be longer than 2 Characters",
  max_length: "ERROR(Invalid Length): Name cannot be longer than 30 Characters",
};

const email_errors = {
  required_error: "ERROR(Missing): Email is required for signup ",
  invalid_type: "ERROR(Invalid Type): Email should be of the string data type",
  invalid_email: "ERROR(Invalid Email): Enter a valid email address",
  min_length: "ERROR(Invalid Length): Email should be longer than 5 Characters",
  max_length:
    "ERROR(Invalid Length): Email cannot be longer than 30 Characters",
};

const password_errors = {
  required_error: "ERROR(Missing): Password is required for signup ",
  invalid_type:
    "ERROR(Invalid Type): Password should be of the string data type",
  min_length:
    "ERROR(Invalid Length): Password should be longer than 8 Characters",
  max_length:
    "ERROR(Invalid Length): Password cannot be longer than 30 Characters",
};

export { name_errors, email_errors, password_errors };
