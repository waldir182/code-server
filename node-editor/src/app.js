const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");
const router = require('./router/index')
const explorer = require('./router/explorer')
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// Configuraciones
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("./assets"));
// Routerß
app.use('/', router);
app.use('/explorer', explorer)
// Servidor
app.listen(port, () => {
  console.log("Servidor activo");
});
