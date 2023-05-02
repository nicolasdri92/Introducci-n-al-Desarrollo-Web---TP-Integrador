const estudianteModel = require("../models/estudiante.model");

const controller = {
  getById: async (req, res) => {
    try {
      var { _id } = req.params;
      var estudiante = await estudianteModel.findOne({ _id });

      if (!estudiante) {
        res.status(404).send({ message: "El estudiante no existe" });
      } else {
        res.status(200).send(estudiante);
      }
    } catch (err) {
      console.log(err);
    }
  },
  allList: async (req, res) => {
    try {
      var estudiantes = await estudianteModel.find(req.query).populate([
        {
          path: "materia",
          populate: "carrera",
        },
      ]);
      if (!estudiantes) {
        res.status(404).send({ message: "No hay estudiantes creados" });
      } else {
        res.status(200).send(estudiantes);
      }
    } catch (err) {
      console.log(err);
    }
  },
  create: async (req, res) => {
    try {
      var estudiante = new estudianteModel();

      estudiante.dni = req.body.dni;
      estudiante.apellido = req.body.apellido;
      estudiante.nombre = req.body.nombre;
      estudiante.fecha = req.body.fecha;
      estudiante.nacionalidad = req.body.nacionalidad;
      estudiante.email = req.body.email;
      estudiante.telefono = req.body.telefono;
      estudiante.materia = req.body.materia;

      estudianteStored = await estudiante.save();
      if (!estudianteStored) {
        res.status(404).send({ message: "El estudiante no ha sido guardado" });
      } else {
        res.status(200).send(estudianteStored);
      }
    } catch (err) {
      console.log(err);
    }
  },
  update: async (req, res) => {
    try {
      var { _id } = req.params;
      var estudianteUpdated = await estudianteModel.findOneAndUpdate(
        { _id },
        req.body,
        { new: true }
      );

      if (!estudianteUpdated) {
        res
          .status(404)
          .send({ message: "El estudiante no ha sido actualizado" });
      } else {
        res.status(200).send(estudianteUpdated);
      }
    } catch (err) {
      console.log(err);
    }
  },
  remove: async (req, res) => {
    try {
      var { _id } = req.params;
      var estudianteDeleted = await estudianteModel.findOneAndDelete({ _id });

      if (!estudianteDeleted) {
        res.status(404).send({ message: "El estudiante no ha sido eliminado" });
      } else {
        res.status(200).send(estudianteDeleted);
      }
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = controller;
