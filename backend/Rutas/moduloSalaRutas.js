const express = require("express")
const moduloSala = express.Router()

const moduloSalaController = require("../Controladores/moduloSalaController.js")

//Middleware dedicado a verificar si el usuario posee un token valido
const rutasProtegidas = require("../middleware/verificarTokenUsuario.js")

const cors = require("cors")

moduloSala.use(cors())

//Rutas tipo PUT
moduloSala.put("/crear", rutasProtegidas, moduloSalaController.crearModuloSala)

//Rutas tipo GET
moduloSala.get("/obtener", rutasProtegidas, moduloSalaController.obtenerModuloSala)
moduloSala.get("/listar", rutasProtegidas, moduloSalaController.listarModuloSala)
moduloSala.get("/listarporsala", rutasProtegidas, moduloSalaController.listarModuloSalaPorSala)
moduloSala.get("/listarpormodulo", rutasProtegidas, moduloSalaController.listarModuloSalaPorModulo)

//Rutas tipo POST
moduloSala.post("/editar", rutasProtegidas, moduloSalaController.editarModuloSala)

//Rutas tipo PATCH
moduloSala.patch("/habilitar", rutasProtegidas, moduloSalaController.habilitarModuloSala)
moduloSala.patch("/deshabilitar", rutasProtegidas, moduloSalaController.deshabilitarModuloSala)

module.exports = moduloSala