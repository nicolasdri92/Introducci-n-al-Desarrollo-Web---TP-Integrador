var route = require("express").Router();
var materiaController = require("../controllers/materia.controller");

route.get("/materia/:_id", materiaController.getById);
route.get("/materias", materiaController.allList);
route.post("/materia", materiaController.create);
route.put("/materia/:_id", materiaController.update);
route.delete("/materia/:_id", materiaController.remove);

module.exports = route;
