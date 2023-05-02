var mongoose = require("mongoose");
var app = require("express")();
var bodyParser = require("body-parser");
var cors = require("cors");

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Rutas
var carrera = require("./routes/carrera.route");
var materia = require("./routes/materia.route");
var estudiante = require("./routes/estudiante.route");

app.use("/api", [carrera, materia, estudiante]);

mongoose
  .connect("mongodb://localhost:27017/tp_integrador")
  .then(() => app.listen(PORT))
  .catch((err) => console.log(err));

module.exports = app;
