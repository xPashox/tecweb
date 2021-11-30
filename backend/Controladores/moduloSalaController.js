const ServicioCrearModuloSala = require("../Servicios/ModuloSala/servicioCrearModuloSala.js")
const ServicioDeshabilitarModuloSala = require("../Servicios/ModuloSala/servicioDeshabilitarModuloSala.js")
const ServicioEditarModuloSala = require("../Servicios/ModuloSala/servicioEditarModuloSala.js")
const ServicioHabilitarModuloSala = require("../Servicios/ModuloSala/servicioHabilitarModuloSala.js")
const randomString = require("randomstring")

exports.crearModuloSala = async (req, res) => {
	if(req.body.idSala == undefined ||
		req.body.idModulo == undefined ||
		req.body.idUsuarioRolModulo == undefined ||
		req.body.nombre == undefined ||
		req.body.descripcion == undefined ||
		req.body.cantidadAlumnos == undefined ||
		req.body.fechaInicio == undefined ||
		req.body.fechaTermino == undefined){
		return res.json({
			success: false,
			trace: "",
			errors: ["Faltan parametros."]
		})
	}
	let random = randomString.generate(3)
	let codigoNombre = req.body.nombre.substring(0, 3).toLowerCase()
	var moduloSalaData = {
		idSala: req.body.idSala,
		idModulo: req.body.idModulo,
		idUsuarioRolModulo: req.body.idUsuarioRolModulo,
		nombre: req.body.nombre,
		descripcion: req.body.descripcion,
		cantidadAlumnos: req.body.cantidadAlumnos,
		codigo: codigoNombre.concat(random),
		fechaInicio: req.body.fechaInicio,
		fechaTermino: req.body.fechaTermino,
		estado: 1
	}
	res.json(await ServicioCrearModuloSala.crearModuloSala(moduloSalaData))
}

exports.editarModuloSala = async (req, res) =>{
	if(req.body.idSala == undefined ||
		req.body.idModulo == undefined ||
		req.body.idUsuarioRolModulo == undefined ||
		req.body.nombre == undefined ||
		req.body.descripcion == undefined ||
		req.body.cantidadAlumnos == undefined ||
		req.body.fechaInicio == undefined ||
		req.body.fechaTermino == undefined ||
		req.body.id == undefined){
		return res.json({
			success: false,
			trace: "",
			errors: ["Faltan parametros."]
		})
	}
	var moduloSalaData = {
		id: req.body.id,
		idSala: req.body.idSala,
		idModulo: req.body.idModulo,
		idUsuarioRolModulo: req.body.idUsuarioRolModulo,
		nombre: req.body.nombre,
		descripcion: req.body.descripcion,
		cantidadAlumnos: req.body.cantidadAlumnos,
		fechaInicio: req.body.fechaInicio,
		fechaTermino: req.body.fechaTermino
	}
	res.json(await ServicioEditarModuloSala.editarModuloSala(moduloSalaData))

}

exports.deshabilitarModuloSala = async (req, res) => {
	if(req.body.id == undefined){
		return res.json({
			success: false,
			trace: "",
			errors: ["Faltan parametros."]
		})
	}
	res.json(await ServicioDeshabilitarModuloSala.deshabilitarModuloSala(req.body.id))
}

exports.habilitarModuloSala = async (req, res) => {
	if(req.body.id == undefined){
		return res.json({
			success: false,
			trace: "",
			errors: ["Faltan parametros."]
		})
	}
	res.json(await ServicioHabilitarModuloSala.habilitarModuloSala(req.body.id))
}