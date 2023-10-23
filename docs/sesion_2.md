# Sesión 2

## 2.1 Middlewares para seguridad e instrumentación

```js
// middleware/security.js
const cors = require("cors");
const helmet = require("helmet");
const jwt = require("jsonwebtoken");
// middleware/logger.js
const winston = require("winston");
const morgan = require("morgan");
// middleware/error.handler.js
const errorHandler = (err, req, res, next) => {
  //
};
```

## 2.2 Control de rutas compuestas y parámetros

```js
// routes/activities.routes.js
router
  .get("/", readAll)
  .get("/:id", readById)
  .get("/:id/bookings", readBookings)
  .post("/", service.create)
  .put("/:id", service.update)
  .delete("/:id", service.deleteById);
```

```js
// middleware/validation.js
const getId = (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    return next(new AppError("Id is required", "VALIDATION", "getId"));
  }
  if (isNaN(id)) {
    return next(new AppError("Id should be a number", "VALIDATION", "getId"));
  }
  if (!req.args) req.args = [];
  req.args.push(id);
  next();
};
// middleware/controller.js
const control = (serviceFn) => {
  return async (req, res, next) => {
    try {
      const body = await call(req.args, serviceFn);
      const status = getStatusByMethod(req.method);
      res.status(status).json(body);
    } catch (error) {
      next(error);
    }
  };
};
```

## 2.3 Servicios y repositorios

```js
// routes/activities.service.js
async function readAll() {
  return await activitiesRepository.selectAll();
}

async function readById(id) {
  const activity = await activitiesRepository.selectById(id);
  if (!activity) {
    throw new AppError(`Activity with id: ${id} not found `, "NOT_FOUND", "readActivity");
  }
  return activity;
}
```

```js
// shared/memory.repository.js
const MemoryRepository = (seed) => {
  const items = seed || [];

  const selectAll = async () => items;
  const selectById = async (id) => items.find((item) => item.id == id);
};
```
