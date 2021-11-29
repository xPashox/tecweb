const express = require("express")
const usuarioRolModuloSubscripcion = express.Router()

const usuarioRolModuloSubscripcionController = require("../Controladores/usuarioRolModuloSubscripcionController.js")

//Middleware dedicado a verificar si el usuario posee un token valido
const rutasProtegidas = require("../middleware/verificarTokenUsuario.js")

const cors = require("cors")

usuarioRolModuloSubscripcion.use(cors())

//Rutas tipo PUT
usuarioRolModuloSubscripcion.put("/crear", rutasProtegidas, usuarioRolModuloSubscripcionController.crearUsuarioRolModuloSubscripcion)

//Rutas tipo POST
usuarioRolModuloSubscripcion.post("/editar", rutasProtegidas, usuarioRolModuloSubscripcionController.editarUsuarioRolModuloSubscripcion)

//Rutas tipo PATCH
usuarioRolModuloSubscripcion.patch("/habilitar", rutasProtegidas, usuarioRolModuloSubscripcionController.habilitarUsuarioRolModuloSubscripcion)
usuarioRolModuloSubscripcion.patch("/deshabilitar", rutasProtegidas, usuarioRolModuloSubscripcionController.deshabilitarUsuarioRolModuloSubscripcion)

module.exports = usuarioRolModuloSubscripcion