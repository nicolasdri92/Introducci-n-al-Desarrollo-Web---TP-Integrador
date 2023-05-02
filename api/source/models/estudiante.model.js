var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var estudianteSchema = Schema({
  dni: String,
  apellido: String,
  nombre: String,
  fecha: String,
  nacionalidad: String,
  email: String,
  telefono: String,
  materia: [{ type: Schema.ObjectId, ref: "Materia" }],
});

module.exports = mongoose.model("Estudiante", estudianteSchema);
