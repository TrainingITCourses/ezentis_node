const activitiesRoutes = require("./activities.routes");
const bookingsRoutes = require("./bookings.routes");

const configRoutes = (app, express) => {
  app.use("/api/activities", activitiesRoutes(express));
  app.use("/api/bookings", bookingsRoutes(express));
  app.use("/", (req, res) => res.send("Hello World! From server!"));
};

module.exports = configRoutes;
