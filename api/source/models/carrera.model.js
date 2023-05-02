var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var carreraSchema = Schema({
  nombre: String,
  tipo: Number,
  modalidad: Boolean,
  duracion: Number,
});

module.exports = mongoose.model("Carrera", carreraSchema);
