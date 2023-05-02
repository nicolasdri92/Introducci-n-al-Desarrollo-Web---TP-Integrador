var route = require("express").Router();
var carreraController = require("../controllers/carrera.controller");

route.get("/carrera/:_id", carreraController.getById);
route.get("/carreras", carreraController.allList);
route.post("/carrera", carreraController.create);
route.put("/carrera/:_id", carreraController.update);
route.delete("/carrera/:_id", carreraController.remove);

module.exports = route;
