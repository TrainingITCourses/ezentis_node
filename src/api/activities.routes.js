const activitiesController = require("./activities.controller");
const middleware = require("../middleware/middleware");
const validation = middleware.validation;
const activitiesRoutes = (express) => {
  const router = express.Router();
  router
    .get("/", middleware.control(activitiesService.readActivities))
    .get("/:id", validation.getId, middleware.control(activitiesService.readActivityById))
    .get("/:id/bookings", (req, res) => res.send("GET /activities/:id/bookings"))
    .post("/", validation.getBody, middleware.control(activitiesService.createActivity))
    .put("/:id", validation.getId, validation.getBody, middleware.control(activitiesService.updateActivity))
    .delete("/:id", (req, res) => res.send("DELETE /activities"));
  return router;
};

module.exports = activitiesRoutes;
