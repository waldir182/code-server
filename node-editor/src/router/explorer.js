const express = require("express");
const router = express.Router();
const fs = require("fs");

// Delete file
router.post("/deletefile", (req, res) => {
  let { ruta } = req.body;
  fs.unlinkSync(ruta);
  res.send("Archivo eliminado");
});

// Delete folder
router.post("/deletefolder", (req, res) => {
  let { ruta } = req.body;
  fs.rmdirSync(ruta);
  res.send("Folder eliminado");
});

// Rename file
router.post("/renamefile", (req, res) => {});
// Rename folder
router.post("/renamefolder", (req, res) => {});
// Nuevo file
router.post("/newfile", (req, res) => {});
// Nuevo folder
router.post("/newfolder", (req, res) => {
  let { ruta, name } = req.body;
  fs.mkdirSync(ruta + name);
  res.send("Carpeta creada");
});
// actualizar file
router.post("/updatefile", (req, res) => {
  let { rute, content } = req.body;
  fs.writeFileSync(rute, content);
  res.send({
    status: 200,
    message: "Updated file",
  });
});
// actualizar file active
router.post("/updatefileactive", (req, res) => {
  let { id } = req.body;
  let files = fs.readFileSync("./history/files.json");
  let json = JSON.parse(files)
  let newJson = [];
  json.forEach((item) => {
    let obj = new Object();
    obj.id = item.id;
    obj.name = item.name;
    obj.rute = item.rute;
    if (item.id == id) {
      obj.state = "active";
    } else {
      obj.state = "off";
    }
    newJson.push(obj);
  });
  fs.writeFileSync("./history/files.json", JSON.stringify(newJson));
  res.send({
    status: 200,
    message: "File active change",
  });
});



module.exports = router;
