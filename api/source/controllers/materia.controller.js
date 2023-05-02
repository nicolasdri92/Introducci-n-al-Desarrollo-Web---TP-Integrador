const materiaModel = require("../models/materia.model");

const controller = {
  getById: async (req, res) => {
    try {
      var { _id } = req.params;
      var materia = await materiaModel.findOne({ _id });

      if (!materia) {
        res.status(404).send({ message: "La materia no existe" });
      } else {
        res.status(200).send(materia);
      }
    } catch (err) {
      console.log(err);
    }
  },
  allList: async (req, res) => {
    try {
      var materias = await materiaModel
        .find(req.query)
        .populate({ path: "carrera" });

      if (!materias) {
        res.status(404).send({ message: "No hay materias creadas" });
      } else {
        res.status(200).send(materias);
      }
    } catch (err) {
      console.log(err);
    }
  },
  create: async (req, res) => {
    try {
      var materia = new materiaModel();

      materia.nombre = req.body.nombre;
      materia.regimen = req.body.regimen;
      materia.hora = req.body.hora;
      materia.anio = req.body.anio;
      materia.carrera = req.body.carrera;

      materiaStored = await materia.save();
      if (!materiaStored) {
        res.status(404).send({ message: "La materia no ha sido guardada" });
      } else {
        res.status(200).send(materiaStored);
      }
    } catch (err) {
      console.log(err);
    }
  },
  update: async (req, res) => {
    try {
      var { _id } = req.params;
      var materiaUpdated = await materiaModel.findOneAndUpdate(
        { _id },
        req.body,
        { new: true }
      );

      if (!materiaUpdated) {
        res.status(404).send({ message: "La materia no ha sido actualizada" });
      } else {
        res.status(200).send(materiaUpdated);
      }
    } catch (err) {
      console.log(err);
    }
  },
  remove: async (req, res) => {
    try {
      var { _id } = req.params;
      var materiaDeleted = await materiaModel.findOneAndDelete({ _id });

      if (!materiaDeleted) {
        res.status(404).send({ message: "La materia no ha sido eliminada" });
      } else {
        res.status(200).send(materiaDeleted);
      }
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = controller;
