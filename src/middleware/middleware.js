const logs = require("./logs");
const validation = require("./validation");
const errors = require("./errors");

const middleware = {
  logs,
  validation,
  errors,
};

module.exports = middleware;
