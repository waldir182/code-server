const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.post("/folder", (req, res) => {
  let ruta = req.body.ruta;
  let items = fs.readdirSync(ruta);
  let data = [];
  items.forEach((item) => {
    let obj = new Object();
    obj.name = item;

    if (fs.lstatSync(ruta + item).isDirectory()) {
      obj.type = "folder";
    } else {
      obj.type = "file";
      obj.ext = path.extname(item);
    }
    data.push(obj);
  });
  res.send(data);
});

router.get("/", (req, res) => {
  let files = fs.readFileSync("./history/files.json");
  let folders = fs.readFileSync("./history/folders.json");
  let arrayFiles = [];
  files = JSON.parse(files);

  files.forEach((file) => {
    let obj = new Object();
    obj.id = file.id;
    obj.name = file.name;
    obj.state = file.state;
    obj.rute = file.rute;
    obj.content = fs.readFileSync(file.rute);
    arrayFiles.push(obj);
  });

  res.render("index", {
    arrayFiles,
    folders: JSON.parse(folders),
  });
});

module.exports = router;
