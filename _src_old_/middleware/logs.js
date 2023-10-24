const winston = require("winston");
const morgan = require("morgan");
const { combine, timestamp, prettyPrint, colorize, simple } = winston.format;

const today = new Date().toISOString().slice(0, 10);
const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), prettyPrint()),
  transports: [new winston.transports.File({ filename: `./logs/${today}.log`, level: "warn" })],
});

logger.stream = {
  write: (message) => logger.warn(message.substring(0, message.lastIndexOf("\n"))),
};

const useLoggers = (app) => {
  app.use(morgan("dev", { stream: logger.stream }));
  if (process.env.NODE_ENV !== "production") {
    logger.add(
      new winston.transports.Console({
        format: combine(colorize(), simple()),
      })
    );
  }
  return logger;
};

const debugReq = (req, res, next) => {
  logger.info(`${new Date().toLocaleTimeString()}`, getRequestInfo(req));
  next();
};

const getRequestInfo = (req) => {
  const requestInfo = {
    path: `${req.method} ${req.originalUrl}`,
  };
  const auth = req.headers.authorization;
  if (auth) requestInfo.auth = auth.substring(0, 10);
  if (hasInfo(req.params)) {
    requestInfo.params = req.params;
  }
  if (hasInfo(req.query)) {
    requestInfo.query = req.query;
  }
  if (hasInfo(req.body)) {
    requestInfo.body = req.body;
  }
  return requestInfo;
};

const hasInfo = (property) => Object.keys(property).length > 0;

/**
 * Configures and returns the application logger
 */
const logs = {
  logger,
  useLoggers,
  debugReq,
};

module.exports = logs;
