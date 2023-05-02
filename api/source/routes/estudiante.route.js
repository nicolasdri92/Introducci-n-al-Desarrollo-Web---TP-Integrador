var route = require("express").Router();
var estudianteController = require("../controllers/estudiante.controller");

route.get("/estudiante/:_id", estudianteController.getById);
route.get("/estudiantes", estudianteController.allList);
route.post("/estudiante", estudianteController.create);
route.put("/estudiante/:_id", estudianteController.update);
route.delete("/estudiante/:_id", estudianteController.remove);

module.exports = route;
