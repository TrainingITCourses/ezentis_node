const getId = (req, res, next) => {
  const id = req.params.id;
  if (!id) throw new Error("Id is required");
  if (!req.args) req.args = [];
  req.args.push(id);
  next();
};

const getBody = (req, res, next) => {
  const body = req.body;
  if (!body || Object.keys(body).length === 0) throw new Error("Body is required");
  if (!req.args) req.args = [];
  req.args.push(body);
  next();
};

const validation = {
  getId,
  getBody,
};

module.exports = validation;
