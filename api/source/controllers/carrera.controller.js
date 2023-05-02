const carreraModel = require("../models/carrera.model");

const controller = {
  getById: async (req, res) => {
    try {
      var { _id } = req.params;
      var carrera = await carreraModel.findOne({ _id });

      if (!carrera) {
        res.status(404).send({ message: "El carrera no existe" });
      } else {
        res.status(200).send(carrera);
      }
    } catch (err) {
      console.log(err);
    }
  },
  allList: async (req, res) => {
    try {
      var carreras = await carreraModel.find();

      if (!carreras) {
        res.status(404).send({ message: "No hay carreras creados" });
      } else {
        res.status(200).send(carreras);
      }
    } catch (err) {
      console.log(err);
    }
  },
  create: async (req, res) => {
    try {
      var carrera = new carreraModel();

      carrera.nombre = req.body.nombre;
      carrera.tipo = req.body.tipo;
      carrera.modalidad = req.body.modalidad;
      carrera.duracion = req.body.duracion;

      carreraStored = await carrera.save();
      if (!carreraStored) {
        res.status(404).send({ message: "El carrera no ha sido guardado" });
      } else {
        res.status(200).send(carreraStored);
      }
    } catch (err) {
      console.log(err);
    }
  },
  update: async (req, res) => {
    try {
      var { _id } = req.params;
      var carreraUpdated = await carreraModel.findOneAndUpdate(
        { _id },
        req.body,
        { new: true }
      );

      if (!carreraUpdated) {
        res.status(404).send({ message: "El carrera no ha sido actualizado" });
      } else {
        res.status(200).send(carreraUpdated);
      }
    } catch (err) {
      console.log(err);
    }
  },
  remove: async (req, res) => {
    try {
      var { _id } = req.params;
      var carreraDeleted = await carreraModel.findOneAndDelete({ _id });

      if (!carreraDeleted) {
        res.status(404).send({ message: "El carrera no ha sido eliminado" });
      } else {
        res.status(200).send(carreraDeleted);
      }
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = controller;
