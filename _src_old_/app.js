const express = require("express");

const routes = require("./api/routes");
const middleware = require("./middleware/middleware");
const logger = middleware.logs.logger;
const app = express();

app.use(express.json());
middleware.useSecurity(app);

middleware.logs.useLoggers(app);

routes(app, express);
app.use(middleware.errors.appErrorHandler);

const PORT = process.env.PORT || 3000;
const startMessage = `Listening on port ${PORT}`;

app.listen(PORT, () => logger.warn(startMessage));
