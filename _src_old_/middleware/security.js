const cors = require("cors");
const helmet = require("helmet");
const apiKey = "ezentis-api-key";

const guardApiKey = (req, res, next) => {
  const key = req.headers["x-api-key"];
  if (!key || key !== apiKey) {
    const err = new Error("API Key Required");
    return next(err);
  }
  next();
};

const useSecurity = (app) => {
  app.use(cors());
  app.use(helmet());
  // app.use(guardApiKey);
};

module.exports = useSecurity;
