const service = require("./activities.service");
const middleware = require("../middleware/middleware");
const { control } = middleware;
const validation = middleware.validation;
const { getId, getBody } = validation;
const { debugReq } = middleware.logs;
const activitiesRoutes = (express) => {
  const router = express.Router();
  router
    .get("/", control(service.readActivities))
    .get("/:id", getId, control(service.readActivityById))
    .post("/", getBody, control(service.createActivity))
    .put("/:id", debugReq, getId, getBody, control(service.updateActivity))
    .get("/:id/bookings", (req, res) => res.send("GET /activities/:id/bookings"))
    .delete("/:id", (req, res) => res.send("DELETE /activities"));
  return router;
};

module.exports = activitiesRoutes;
