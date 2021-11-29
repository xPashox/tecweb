const express = require("express")
const usuarioRolModulo = express.Router()

const usuarioRolModuloController = require("../Controladores/usuarioRolModuloController.js")

//Middleware dedicado a verificar si el usuario posee un token valido
const rutasProtegidas = require("../middleware/verificarTokenUsuario.js")

const cors = require("cors")

usuarioRolModulo.use(cors())

//Rutas tipo PUT
usuarioRolModulo.put("/crear", rutasProtegidas, usuarioRolModuloController.crearUsuarioRolModulo)

//Rutas tipo POST
usuarioRolModulo.post("/editar", rutasProtegidas, usuarioRolModuloController.editarUsuarioRolModulo)

//Rutas tipo PATCH
usuarioRolModulo.patch("/habilitar", rutasProtegidas, usuarioRolModuloController.habilitarUsuarioRolModulo)
usuarioRolModulo.patch("/deshabilitar", rutasProtegidas, usuarioRolModuloController.deshabilitarUsuarioRolModulo)

module.exports = usuarioRolModulo