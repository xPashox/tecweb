const express = require("express")
const usuarioRolModuloSalaReserva = express.Router()

const usuarioRolModuloSalaReservaController = require("../Controladores/usuarioRolModuloSalaReservaController.js")

//Middleware dedicado a verificar si el usuario posee un token valido
const rutasProtegidas = require("../middleware/verificarTokenUsuario.js")

const cors = require("cors")

usuarioRolModuloSalaReserva.use(cors())

//Rutas tipo PUT
usuarioRolModuloSalaReserva.put("/crear", rutasProtegidas, usuarioRolModuloSalaReservaController.crearUsuarioRolModuloSalaReserva)

//Rutas tipo POST
usuarioRolModuloSalaReserva.post("/editar", rutasProtegidas, usuarioRolModuloSalaReservaController.editarUsuarioRolModuloSalaReserva)

//Rutas tipo PATCH
usuarioRolModuloSalaReserva.patch("/habilitar", rutasProtegidas, usuarioRolModuloSalaReservaController.habilitarUsuarioRolModuloSalaReserva)
usuarioRolModuloSalaReserva.patch("/deshabilitar", rutasProtegidas, usuarioRolModuloSalaReservaController.deshabilitarUsuarioRolModuloSalaReserva)

module.exports = usuarioRolModuloSalaReserva