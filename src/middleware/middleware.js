const logs = require("./logs");
const validation = require("./validation");
const errors = require("./errors");
const control = require("./controller");
const useSecurity = require("./security");
const { guardUser } = require("./authorization");

const middleware = {
  logs,
  validation,
  errors,
  control,
  useSecurity,
  guardUser,
};

module.exports = middleware;
