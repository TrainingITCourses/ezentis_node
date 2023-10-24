# Sesión 3

## 3.1 Definición del modelo de datos code first

Install Sequelize and PostgreSQL:

"sequelize": "^5.22.3",
"sequelize-hierarchy": "^2.0.4"

```bash
npm i pg pg-hstore sequelize
npm i -D sequelize-cli
npx sequelize-cli init
```

```js
// `.sequelizerc` file
const path = require("path");

module.exports = {
  config: path.resolve("app", "shared", "db", "config", "config.json"),
  "models-path": path.resolve("app", "shared", "db", "models"),
  "seeders-path": path.resolve("app", "shared", "db", "seeders"),
  "migrations-path": path.resolve("app", "shared", "db", "migrations"),
};
```

https://customer.elephantsql.com/instance

Copy the URL from the Details tab and paste it into:

- db/config/config.json file.

After running the above command, create the following models:

```bash
npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string
npx sequelize-cli model:generate --name Activity --attributes name:string,description:string,price:float,quorum:integer,capacity:integer
npx sequelize-cli model:generate --name Booking --attributes activityId:integer,userId:integer,participants:integer,status:string,capacity:integer
npx sequelize-cli db:migrate
```

## 3.2 Persistencia en PostgreSQL

```js

```

## 3.3 Operaciones CRUD

```js

```
