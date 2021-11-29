const ServicioCrearUsuarioRolModulo = require("../Servicios/UsuarioRolModulo/servicioCrearUsuarioRolModulo.js")
const ServicioDeshabilitarUsuarioRolModulo = require("../Servicios/UsuarioRolModulo/servicioDeshabilitarUsuarioRolModulo.js")
const ServicioEditarUsuarioRolModulo = require("../Servicios/UsuarioRolModulo/servicioEditarUsuarioRolModulo.js")
const ServicioHabilitarUsuarioRolModulo = require("../Servicios/UsuarioRolModulo/servicioHabilitarUsuarioRolModulo.js")

exports.crearUsuarioRolModulo = async (req, res) => {
	if(req.body.idUsuarioRol == undefined ||
		req.body.idModulo == undefined){
		return res.json({
			success: false,
			trace: "",
			errors: ["Faltan parametros."]
		})
	}
	var usuarioRolModuloData = {
		idUsuarioRol: req.body.idUsuarioRol,
		idModulo: req.body.idModulo,
		estado: 1
	}
	res.json(await ServicioCrearUsuarioRolModulo.crearUsuarioRolModulo(usuarioRolModuloData))
}

exports.editarUsuarioRolModulo = async (req, res) => {
	if(req.body.idUsuarioRol == undefined ||
		req.body.idModulo == undefined ||
		req.body.id == undefined){
		return res.json({
			success: false,
			trace: "",
			errors: ["Faltan parametros."]
		})
	}
	var usuarioRolModuloData = {
		id: req.body.id,
		idUsuarioRol: req.body.idUsuarioRol,
		idModulo: req.body.idModulo
	}
	res.json(await ServicioEditarUsuarioRolModulo.editarUsuarioRolModulo(usuarioRolModuloData))
}

exports.deshabilitarUsuarioRolModulo = async (req, res) => {
	if(req.body.id == undefined){
		return res.json({
			success: false,
			trace: "",
			errors: ["Faltan parametros."]
		})
	}
	res.json(await ServicioDeshabilitarUsuarioRolModulo.deshabilitarUsuarioRolModulo(req.body.id))
}

exports.habilitarUsuarioRolModulo = async (req, res) => {
	if(req.body.id == undefined){
		return res.json({
			success: false,
			trace: "",
			errors: ["Faltan parametros."]
		})
	}
	res.json(await ServicioHabilitarUsuarioRolModulo.habilitarUsuarioRolModulo(req.body.id))
}