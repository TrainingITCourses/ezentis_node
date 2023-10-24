const logs = require("./logs");
const validation = require("./validation");
const errors = require("./errors");
const control = require("./controller");

const middleware = {
  logs,
  validation,
  errors,
  control,
};

module.exports = middleware;
