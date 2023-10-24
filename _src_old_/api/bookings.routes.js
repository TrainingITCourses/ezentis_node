const bookingsRoutes = (express) => {
  const router = express.Router();
  router
    .get("/", (req, res) => res.send([{ name: "booking1" }, { name: "booking2" }]))
    .get("/:id", (req, res) => res.send("GET /bookings " + req.params.id))
    .post("/", (req, res) => res.send("POST /bookings"))
    .put("/:id", (req, res) => res.send("PUT /bookings"))
    .delete("/:id", (req, res) => res.send("DELETE /bookings"));
  return router;
};

module.exports = bookingsRoutes;
