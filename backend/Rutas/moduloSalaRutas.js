const express = require("express")
const moduloSala = express.Router()

const moduloSalaController = require("../Controladores/moduloSalaController.js")

//Middleware dedicado a verificar si el usuario posee un token valido
const rutasProtegidas = require("../middleware/verificarTokenUsuario.js")

const cors = require("cors")

moduloSala.use(cors())

//Rutas tipo PUT
moduloSala.put("/crear", rutasProtegidas, moduloSalaController.crearModuloSala)

//Rutas tipo POST
moduloSala.post("/editar", rutasProtegidas, moduloSalaController.editarModuloSala)

//Rutas tipo PATCH
moduloSala.patch("/habilitar", rutasProtegidas, moduloSalaController.habilitarModuloSala)
moduloSala.patch("/deshabilitar", rutasProtegidas, moduloSalaController.deshabilitarModuloSala)

module.exports = moduloSala