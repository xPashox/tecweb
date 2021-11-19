const express = require("express")
const usuarioRolCarrera = express.Router()

const usuarioRolCarreraController = require("../Controladores/usuarioRolCarreraController.js")

//Middleware dedicado a verificar si el usuario posee un token valido
const rutasProtegidas = require("../middleware/verificarTokenUsuario.js")
const verificarRolUsuario = require("../middleware/verificarRolUsuario.js")

const cors = require("cors")

usuarioRolCarrera.use(cors())

//Rutas con PUT
usuarioRolCarrera.put("/crear", rutasProtegidas, usuarioRolCarreraController.crearUsuarioRolCarrera)

//Rutas con POST
usuarioRolCarrera.post("/editar", rutasProtegidas, usuarioRolCarreraController.editarUsuarioRolCarrera)
usuarioRolCarrera.post("/deshabilitar", rutasProtegidas, usuarioRolCarreraController.deshabilitarUsuarioRolCarrera)
usuarioRolCarrera.post("/habilitar", rutasProtegidas, usuarioRolCarreraController.habilitarUsuarioRolCarrera)
usuarioRolCarrera.post("/eliminar", rutasProtegidas, verificarRolUsuario.verificarRolAdministrador)

module.exports = usuarioRolCarrera