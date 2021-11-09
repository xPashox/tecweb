const express = require("express")
const usuario = express.Router()

const usuarioController = require("../Controladores/usuarioController.js")
const rutasProtegidas = require("./verificarTokenUsuario.js")

const cors = require("cors")

usuario.use(cors())

usuario.post("/crear", rutasProtegidas, usuarioController.crearUsuario)

module.exports = usuario