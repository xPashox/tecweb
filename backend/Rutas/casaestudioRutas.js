const express = require("express")
const casaestudio = express.Router()

const casaestudioController = require("../Controladores/casaestudioController")

//Middleware dedicado a verificar si el usuario posee un token valido
const rutasProtegidas = require("../middleware/verificarTokenUsuario.js")

//Middleware dedicado a verificar si el usuario posee un rol valido para la operación
const verificarRolUsuario = require("../middleware/verificarRolUsuario.js")


const cors = require("cors")

casaestudio.use(cors())

//Rutas tipo PUT
casaestudio.put("/crear", rutasProtegidas,
	verificarRolUsuario.verificarRolAdmnistradorOEncargado,
	casaestudioController.crearCasaEstudio)

//Rutas tipo GET
casaestudio.get("/obtener", rutasProtegidas,
	casaestudioController.obtenerCasaEstudio)

    casaestudio.get("/listar", rutasProtegidas, casaestudioController.listarCasasEstudio)

//Rutas tipo PATCH
casaestudio.patch("/deshabilitar", rutasProtegidas, casaestudioController.deshabilitarCasaEstudio)
casaestudio.patch("/habilitar", rutasProtegidas, casaestudioController.habilitarCasaEstudio)

//Rutas tipo POST
casaestudio.post("/editar", rutasProtegidas, casaestudioController.editarCasaEstudio)

module.exports = casaestudio