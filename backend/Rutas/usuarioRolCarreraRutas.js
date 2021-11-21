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

//Rutas con PATCH
usuarioRolCarrera.patch("/deshabilitar", rutasProtegidas, usuarioRolCarreraController.deshabilitarUsuarioRolCarrera)
usuarioRolCarrera.patch("/habilitar", rutasProtegidas, usuarioRolCarreraController.habilitarUsuarioRolCarrera)

//Rutas con DELETE
usuarioRolCarrera.delete("/eliminar", rutasProtegidas, verificarRolUsuario.verificarRolAdministrador)

module.exports = usuarioRolCarrera