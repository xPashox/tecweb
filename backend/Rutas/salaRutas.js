const express = require("express")
const sala = express.Router()

const salaController = require("../Controladores/salaController")

//Middleware dedicado a verificar si el usuario posee un token valido
const rutasProtegidas = require("../middleware/verificarTokenUsuario.js")

//Middleware dedicado a verificar si el usuario posee un rol valido para la operación
const verificarRolUsuario = require("../middleware/verificarRolUsuario.js")


const cors = require("cors")

sala.use(cors())

//Rutas tipo PUT
sala.put("/crear", rutasProtegidas,
	verificarRolUsuario.verificarRolAdmnistradorOEncargado,
	salaController.crearSala)

//Rutas tipo GET
sala.get("/obtener", rutasProtegidas,
	salaController.obtenerSala)

sala.get("/listar", rutasProtegidas, salaController.listarSalas)

//Rutas tipo PATCH
sala.patch("/deshabilitar", rutasProtegidas, salaController.deshabilitarSala)
sala.patch("/habilitar", rutasProtegidas, salaController.habilitarSala)

//Rutas tipo POST
sala.post("/editar", rutasProtegidas, salaController.editarSala)

module.exports = sala