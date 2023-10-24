const { logger } = require("./logs");

const appErrorHandler = (err, req, res, next) => {
  // console.error(err);
  if (res.headerSent) return next(err);
  if (err.message === "API Key Required") {
    logger.warn(err.message);
    return res.status(401).send({ message: err.message });
  }
  logger.error(err.message);
  res.status(500).send({ message: err.message });
  //next(err);
};

const errors = {
  appErrorHandler,
};

module.exports = errors;
