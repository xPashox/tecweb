const express = require("express")
const modulo = express.Router()

const moduloController = require("../Controladores/moduloController.js")

//Middleware dedicado a verificar si el usuario posee un token valido
const rutasProtegidas = require("../middleware/verificarTokenUsuario.js")

const cors = require("cors")

modulo.use(cors())

//Rutas tipo PUT
modulo.put("/crear", rutasProtegidas, moduloController.crearModulo)

//Rutass tipo get
modulo.get("/obtener", rutasProtegidas, moduloController.obtenerModulo)
modulo.get("/listar", rutasProtegidas, moduloController.listarModulos)
modulo.get("/listarporcarrera", rutasProtegidas, moduloController.listarModuloPorCarrera)
modulo.get("/listarporcasaestudio", rutasProtegidas, moduloController.listarModuloPorCasaEstudio)

//Rutas tipo POST
modulo.post("/editar", rutasProtegidas, moduloController.editarModulo)

//Rutas tipo PATCH
modulo.patch("/habilitar", rutasProtegidas, moduloController.habilitarModulo)
modulo.patch("/deshabilitar", rutasProtegidas, moduloController.deshabilitarModulo)

module.exports = modulo