const express = require("express");

const routes = require("./api/routes");

const app = express();

routes(app, express);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT} at ${new Date()}`));
