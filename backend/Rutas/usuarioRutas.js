const express = require("express")
const usuario = express.Router()

const usuarioController = require("../Controladores/usuarioController.js")

//Middleware dedicado a verificar si el usuario posee un token valido
const rutasProtegidas = require("../middleware/verificarTokenUsuario.js")

//Middleware dedicado a verificar si el usuario posee un rol valido para la operación
const verificarRolUsuario = require("../middleware/verificarRolUsuario.js")


const cors = require("cors")

usuario.use(cors())

//Rutas tipo PUT
usuario.put("/crear", rutasProtegidas,
	verificarRolUsuario.verificarRolAdmnistradorOEncargado,
	usuarioController.crearUsuario)

//Rutas tipo GET
usuario.get("/listarusuario", rutasProtegidas,
	usuarioController.listarUsuario)

usuario.get("/listarusuarios", rutasProtegidas, usuarioController.listarUsuarios)

//Rutas tipo POST
usuario.post("/login", usuarioController.login)
usuario.post("/deshabilitar", rutasProtegidas, usuarioController.deshabilitarUsuario)
usuario.post("/habilitar", rutasProtegidas, usuarioController.habilitarUsuario)
usuario.post("/editar", rutasProtegidas, usuarioController.editarUsuario)

module.exports = usuario