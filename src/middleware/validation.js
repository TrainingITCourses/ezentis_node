const getId = (req, res, next) => {
  const id = req.params.id;
  if (!id) throw new Error("Id is required");
  req.args = { ...req.args, id };
  next();
};

const getBody = (req, res, next) => {
  const body = req.body;
  if (!body) throw new Error("Body is required");
  req.args = { ...req.args, body };
  next();
};

const validation = {
  getId,
  getBody,
};

module.exports = validation;
