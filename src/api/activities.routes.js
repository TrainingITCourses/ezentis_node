const activitiesController = require("./activities.controller");
const activitiesRoutes = (express) => {
  const router = express.Router();
  router
    .get("/", activitiesController.getActivities)
    .get("/:id", activitiesController.getActivity)
    .get("/:id/bookings", (req, res) => res.send("GET /activities/:id/bookings"))
    .post("/", activitiesController.postActivity)
    .put("/:id", (req, res) => res.send("PUT /activities"))
    .delete("/:id", (req, res) => res.send("DELETE /activities"));
  return router;
};

module.exports = activitiesRoutes;
