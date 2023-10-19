const activitiesRoutes = (express) => {
  const router = express.Router();
  router
    .get("/", (req, res) => res.send([{ name: "activity1" }, { name: "activity2" }]))
    .get("/:id", (req, res) => res.send("GET /activities"))
    .get("/:id/bookings", (req, res) => res.send("GET /activity/bookings"))
    .post("/", (req, res) => res.send("POST /activities"))
    .put("/:id", (req, res) => res.send("PUT /activities"))
    .delete("/:id", (req, res) => res.send("DELETE /activities"));
  return router;
};

module.exports = activitiesRoutes;
