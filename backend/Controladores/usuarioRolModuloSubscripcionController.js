const ServicioCrearUsuarioRolModuloSubscripcion = require("../Servicios/UsuarioRolModuloSubscripcion/servicioCrearUsuarioRolModuloSubscripcion.js")
const ServicioDeshabilitarUsuarioRolModuloSubscripcion = require("../Servicios/UsuarioRolModuloSubscripcion/servicioDeshabilitarUsuarioRolModuloSubscripcion.js")
const ServicioHabilitarUsuarioRolModuloSubscripcion = require("../Servicios/UsuarioRolModuloSubscripcion/servicioHabilitarUsuarioRolModuloSubscripcion.js")
const ServicioEditarUsuarioRolModuloSubscripcion = require("../Servicios/UsuarioRolModuloSubscripcion/servicioEditarUsuarioRolModuloSubscripcion.js")

exports.crearUsuarioRolModuloSubscripcion = async (req, res) => {
	if(req.body.idUsuarioRol == undefined ||
		req.body.idModulo == undefined){
		return res.json({
			success: true,
			trace: "",
			errors: ["Faltan parametros."]
		})
	}
	var moduloSubscripcionData = {
		idUsuarioRol: req.body.idUsuarioRol,
		idModulo: req.body.idModulo,
		estado: 1
	}
	res.json(await ServicioCrearUsuarioRolModuloSubscripcion.crearUsuarioRolModuloSubscripcion(moduloSubscripcionData))
}

exports.editarUsuarioRolModuloSubscripcion = async (req, res) => {
	if(req.body.idUsuarioRol == undefined ||
		req.body.idModulo == undefined ||
		req.body.id == undefined){
		return res.json({
			success: true,
			trace: "",
			errors: ["Faltan parametros."]
		})
	}
	var moduloSubscripcionData = {
		id: req.body.id,
		idUsuarioRol: req.body.idUsuarioRol,
		idModulo: req.body.idModulo
	}
	res.json(await ServicioEditarUsuarioRolModuloSubscripcion.editarUsuarioRolModuloSubscripcion(moduloSubscripcionData))
}

exports.deshabilitarUsuarioRolModuloSubscripcion = async (req, res) => {
	if(req.body.id == undefined){
		return res.json({
			success: false,
			trace: "",
			errors: ["Faltan parametros."]
		})
	}
	res.json(await ServicioDeshabilitarUsuarioRolModuloSubscripcion.deshabilitarUsuarioRolModuloSubscripcion(req.body.id))
}

exports.habilitarUsuarioRolModuloSubscripcion = async (req, res) => {
	if(req.body.id == undefined){
		return res.json({
			success: false,
			trace: "",
			errors: ["Faltan parametros."]
		})
	}
	res.json(await ServicioHabilitarUsuarioRolModuloSubscripcion.habilitarUsuarioRolModuloSubscripcion(req.body.id))
}