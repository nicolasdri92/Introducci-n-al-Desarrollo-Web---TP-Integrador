var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var materiaSchema = Schema({
  nombre: String,
  regimen: Number,
  hora: Number,
  anio: Number,
  carrera: { type: Schema.ObjectId, ref: "Carrera" },
});

module.exports = mongoose.model("Materia", materiaSchema);
