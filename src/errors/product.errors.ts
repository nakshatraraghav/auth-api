const title_errors = {
  required_error: "ERROR(Missing): Title is required for product creation ",
  invalid_type: "ERROR(Invalid Type): Title should be of the string data type",
  min_length: "ERROR(Invalid Length): Title should be longer than 4 Characters",
  max_length:
    "ERROR(Invalid Length): Title cannot be longer than 30 Characters",
};

const description_errors = {
  required_error:
    "ERROR(Missing): Description is required for product creation ",
  invalid_type:
    "ERROR(Invalid Type): Description should be of the string data type",
  min_length:
    "ERROR(Invalid Length): Description should be longer than 6 Characters",
  max_length:
    "ERROR(Invalid Length): Description cannot be longer than 280 Characters",
};

const price_errors = {
  required_error:
    "ERROR(Missing): Product price is required for product creation ",
  invalid_type:
    "ERROR(Invalid Type): Product price should be of the number data type",

  min_price: "ERROR(Invalid Price): Price should be greater than 0 Rs",
};

const discount_errors = {
  invalid_type:
    "ERROR(Invalid Type): Product discount should be of the number data type",
  min_discount:
    "ERROR(Invalid Price): Product discount should be greater than 0% ",
};

export const find_product_errors = {
  missing_id: `ERROR(Missing ID): Enter the Product ID`,
};

export { description_errors, discount_errors, price_errors, title_errors };
