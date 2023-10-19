const activitiesController = require("./activities.controller");
const middleware = require("../middleware/middleware");
const validation = middleware.validation;
const activitiesRoutes = (express) => {
  const router = express.Router();
  router
    .get("/", activitiesController.getActivities)
    .get("/:id", validation.getId, activitiesController.getActivity)
    .get("/:id/bookings", (req, res) => res.send("GET /activities/:id/bookings"))
    .post("/", validation.getBody, activitiesController.postActivity)
    .put("/:id", (req, res) => res.send("PUT /activities"))
    .delete("/:id", (req, res) => res.send("DELETE /activities"));
  return router;
};

module.exports = activitiesRoutes;
