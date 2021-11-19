const express = require("express")
const carrera = express.Router()

const carreraController = require("../Controladores/carreraController.js")

//Middleware dedicado a verificar si el usuario posee un token valido
const rutasProtegidas = require("../middleware/verificarTokenUsuario.js")

const cors = require("cors")

carrera.use(cors())

//Rutas tipo PUT
carrera.put("/crear", rutasProtegidas, carreraController.crearCarrera)

//Rutas tipo POST
carrera.post("/editar", rutasProtegidas, carreraController.editarCarrera)
carrera.post("/deshabilitar", rutasProtegidas, carreraController.deshabilitarCarrera)
carrera.post("/habilitar", rutasProtegidas, carreraController.habilitarCarrera)

module.exports = carrera