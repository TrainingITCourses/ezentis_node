const usersRoutes = (express) => {
  const router = express.Router();
  router
    .get("/:id", (req, res) => res.send("GET /user " + req.params.id))
    .post("/", (req, res) => res.send("POST register /users"))
    .post("/register", (req, res) => res.send("POST register /users"))
    .post("/login", (req, res) => res.send("POST login /users"))
    .put("/:id", (req, res) => res.send("PUT /user"))
    .delete("/:id", (req, res) => res.send("DELETE /user"));
  return router;
};

module.exports = usersRoutes;
