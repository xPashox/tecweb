const express = require("express")
const usuario = express.Router()

const usuarioController = require("../Controladores/usuarioController.js")

const cors = require("cors")

usuario.use(cors())

usuario.post("/crear", usuarioController.crearUsuario)

module.exports = usuario