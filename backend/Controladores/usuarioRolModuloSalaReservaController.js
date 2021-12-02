const ServicioCrearUsuarioRolModuloSalaReserva = require("../Servicios/UsuarioRolModuloSalaReserva/servicioCrearUsuarioRolModuloSalaReserva.js")
const ServicioDeshabilitarUsuarioRolModuloSalaReserva = require("../Servicios/UsuarioRolModuloSalaReserva/servicioDeshabilitarUsuarioRolModuloSalaReserva.js")
const ServicioHabilitarUsuarioRolModuloSalaReserva = require("../Servicios/UsuarioRolModuloSalaReserva/servicioHabilitarUsuarioRolModuloSalaReserva.js")
const ServicioEditarUsuarioRolModuloSalaReserva = require("../Servicios/UsuarioRolModuloSalaReserva/servicioEditarUsuarioRolModuloSalaReserva.js")

exports.crearUsuarioRolModuloSalaReserva = async (req, res) => {
	if(req.body.idUsuarioRol == undefined ||
		req.body.idModuloSala == undefined ||
		req.body.fecha == undefined){
		return res.json({
			success: true,
			trace: "",
			errors: ["Faltan parametros."]
		})
	}
	var moduloSalaReservaData = {
		idUsuarioRol: req.body.idUsuarioRol,
		idModuloSala: req.body.idModuloSala,
		fecha: req.body.fecha,
		estado: 1
	}
	res.json(await ServicioCrearUsuarioRolModuloSalaReserva.crearUsuarioRolModuloSalaReserva(moduloSalaReservaData))
}

exports.editarUsuarioRolModuloSalaReserva = async (req, res) => {
	if(req.body.idUsuarioRol == undefined ||
		req.body.idModuloSala == undefined ||
		req.body.fecha == undefined ||
		req.body.id == undefined){
		return res.json({
			success: true,
			trace: "",
			errors: ["Faltan parametros."]
		})
	}
	var moduloSalaReservaData = {
		id: req.body.id,
		idUsuarioRol: req.body.idUsuarioRol,
		idModuloSala: req.body.idModuloSala,
		fecha: req.body.fecha
	}
	res.json(await ServicioEditarUsuarioRolModuloSalaReserva.editarUsuarioRolModuloSalaReserva(moduloSalaReservaData))
}

exports.deshabilitarUsuarioRolModuloSalaReserva = async (req, res) => {
	if(req.body.id == undefined){
		return res.json({
			success: false,
			trace: "",
			errors: ["Faltan parametros."]
		})
	}
	res.json(await ServicioDeshabilitarUsuarioRolModuloSalaReserva.deshabilitarUsuarioRolModuloSalaReserva(req.body.id))
}

exports.habilitarUsuarioRolModuloSalaReserva = async (req, res) => {
	if(req.body.id == undefined){
		return res.json({
			success: false,
			trace: "",
			errors: ["Faltan parametros."]
		})
	}
	res.json(await ServicioHabilitarUsuarioRolModuloSalaReserva.habilitarUsuarioRolModuloSalaReserva(req.body.id))
}