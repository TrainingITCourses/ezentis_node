module.exports = control = (serviceFn) => {
  return (req, res, next) => {
    try {
      const body = serviceFn(...req.args);
      const status = getResponseStatus(req.method, body);
      return res.status(status).send(body);
    } catch (err) {
      logger.error(err.message);
      return res.status(400).send({ message: err.message });
    }
  };
};

const getResponseStatus = (method, body) => {
  if (method === "POST" || method === "PUT") return 201;
  if (method === "DELETE") return 204;
  if (isNullOrEmpty(body)) return 204;
  return 200;
};

const isNullOrEmpty = (value) => {
  if (!value) return true;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === "object") return Object.keys(value).length === 0;
  return value === "";
};
