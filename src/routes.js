const configRoutes = (app, express) => {
  app.get("/", (req, res) => res.send("Hello World! From server!"));
  const activitiesEndpoint = "/activities";
  app.get("/activities", (req, res) => res.send([{ name: "activity1" }, { name: "activity2" }]));
  app.get("/activities/:id", (req, res) => res.send("GET /activities"));
  app.post("/activities", (req, res) => res.send("POST /activities"));
  app.put("/activities/:id", (req, res) => res.send("PUT /activities"));
  app.delete("/activities/:id", (req, res) => res.send("DELETE /activities"));

  const router = express.Router();
  router
    .get("/", (req, res) => res.send([{ name: "booking1" }, { name: "booking2" }]))
    .get("/:id", (req, res) => res.send("GET /bookings " + req.params.id))
    .post("/", (req, res) => res.send("POST /bookings"))
    .put("/:id", (req, res) => res.send("PUT /bookings"))
    .delete("/:id", (req, res) => res.send("DELETE /bookings"));

  app.use("/bookings", router);
};

module.exports = configRoutes;
