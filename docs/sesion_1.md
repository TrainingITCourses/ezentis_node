# Sesión 1

## 1.1 Introducción a node: instalación, ejecución y ecosistema

```bash
# Instalación
# https://nodejs.org/es/download/
# iniciar proyecto
npm init -y
# instalar dependencias
npm install express
```

```js
# crear index.js
const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.send("Activity Bookings API");
});
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
```

```bash
# ejecutar
node index.js
# ejecutar con nodemon
npm install -D nodemon
"dev" : "nodemon index.js"
npm run dev
# instalar otras dependencias auxiliares
npm install -D eslint prettier eslint-config-prettier eslint-plugin-prettier
```

## 1.2 Asynchronism: sistema de ficheros y llamadas http

```bash
# crear tests
touch tests/index.js
# instalar dependencias
npm install axios
# configurar test y ejecutar
"test": "node tests/index.js"
npm test
```

Test app

```js
// tests/index.js
const axios = require("axios");
const fs = require("fs");
const BASE_URL = "http://localhost:3000/v1";
const test = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    console.log(response.data);
    fs.writeFile("response.json", JSON.stringify(response.data), (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  } catch (error) {
    console.error(error);
    fs.writeFileSync("error.json", JSON.stringify(error));
  }
};
test();

// To Do: use promises (async await)
// const fs = require("fs").promises;
```

## 1.3 Desarrollo de APIs Rest con Express

```js
// activities router /src/routes/activities.router.js

const express = require("express");
const router = express.Router();
router
  .get("/", (req, res) => {
    res.send("All Activities");
  })
  .get("/:id", (req, res) => {
    res.send(`Activity with id ${req.params.id}`);
  })
  .get("/:id/bookings", (req, res) => {
    res.send(`Bookings for Activity with Id ${req.params.id}`);
  })
  .post("/", (req, res) => {
    res.send("Create new Activity");
  })
  .put("/:id", (req, res) => {
    res.send(`Update Activity with Id ${req.params.id}`);
  })
  .delete("/:id", (req, res) => {
    res.send(`Delete Activity with Id ${req.params.id}`);
  });
module.exports = router;

// router /src/routes/index.js
const activitiesRouter = require("./activities.router");
function configure(app) {
  const version = "1";
  app.use(`/v${version}/activities`, activitiesRouter);
  app.use(`/v${version}/bookings`, bookingsRouter);
}

// main express /src/app.js
const routes = require("./routes/v1");
routes.configure(app);
```

Test app

```js
// tests/index.js
const axios = require("axios");
const BASE_URL = "http://localhost:3000/v1";
const test = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/activities`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
test();
```
