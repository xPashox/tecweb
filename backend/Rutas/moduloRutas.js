const express = require("express")
const modulo = express.Router()

const moduloController = require("../Controladores/moduloController.js")

//Middleware dedicado a verificar si el usuario posee un token valido
const rutasProtegidas = require("../middleware/verificarTokenUsuario.js")

const cors = require("cors")

modulo.use(cors())

//Rutas tipo PUT
modulo.put("/crear", rutasProtegidas, moduloController.crearModulo)

//Rutas tipo POST
modulo.post("/editar", rutasProtegidas, moduloController.editarModulo)
modulo.post("/habilitar", rutasProtegidas, moduloController.habilitarModulo)
modulo.post("/deshabilitar", rutasProtegidas, moduloController.deshabilitarModulo)

module.exports = modulo