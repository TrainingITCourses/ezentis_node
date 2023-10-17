const express = require("express");

const routes = require("./routes");

const app = express();

routes(app, express);

app.listen(3000, () => console.log("Listening on port 3000" + new Date()));
