const appErrorHandler = (err, req, res, next) => {
  console.error(err);
  if (res.headerSent) return next(err);
  res.status(500).send({ message: err.message });
  //next(err);
};

const errors = {
  appErrorHandler,
};

module.exports = errors;
