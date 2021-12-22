const Modulo = require("../models/").Modulo
const ServicioCrearModulo = require("../Servicios/Modulo/servicioCrearModulo")
const ServicioDeshabilitarModulo = require("../Servicios/Modulo/servicioDeshabilitarModulo")
const ServicioHabilitarModulo = require("../Servicios/Modulo/servicioHabilitarModulo")
const ServicioEditarModulo = require("../Servicios/Modulo/servicioEditarModulo")
const ServicioListarModulo = require("../Servicios/Modulo/servicioListarModulo")
exports.crearModulo = async (req, res) => {
	if(typeof req.body.idCasaEstudio === "undefined" ||
		 typeof req.body.idCarrera === "undefined" ||
		 typeof req.body.nombre === "undefined"){
		return res.json({
			success: false,
			trace: "",
			errors: [
				"Faltan parametros."
			]
		})
	}
	const moduloData = {
		idCasaEstudio: req.body.idCasaEstudio,
		idCarrera: req.body.idCarrera,
		nombre: req.body.nombre,
		estado: 1
	}
	var crearModuloResult = await ServicioCrearModulo.crearModulo(moduloData)
	if (crearModuloResult.success){
		res.json({
			success: true,
			trace: crearModuloResult.trace,
			errors: []
		})
	}
	else{
		res.json({
			success: false,
			trace: "",
			errors: crearModuloResult.errors
		})
	}
}

exports.editarModulo = async (req, res) => {
	if(typeof req.body.idCasaEstudio === "undefined" ||
		 typeof req.body.idCarrera === "undefined" ||
		 typeof req.body.nombre === "undefined" ||
		 typeof req.body.id === "undefined"){
		return res.json({
			success: false,
			trace: "",
			errors: [
				"Faltan parametros."
			]
		})
	}
	const moduloData = {
		id: req.body.id,
		idCasaEstudio: req.body.idCasaEstudio,
		idCarrera: req.body.idCarrera,
		nombre: req.body.nombre
	}
	var editarModuloResult = await ServicioEditarModulo.editarModulo(moduloData)
	if(editarModuloResult.success){
		res.json({
			success: true,
			trace: editarModuloResult.trace,
			errors:[]
		})
	}
	else{
		res.json({
			success: false,
			trace: "",
			errors: editarModuloResult.errors
		})
	}
}

exports.habilitarModulo = async (req, res) => {
	if(typeof req.body.id === "undefined"){
		return res.json({
			success: false,
			trace: "",
			errors: [
				"Faltan parametros."
			]
		})
	}
	var habilitarModuloResult = await ServicioHabilitarModulo.habilitarModulo(req.body.id)
	if(habilitarModuloResult.success){
		res.json({
			success: true,
			trace: habilitarModuloResult.trace,
			errors: []
		})
	}
	else{
		res.json({
			success: false,
			trace: "",
			errors: habilitarModuloResult.errors
		})
	}
}

exports.deshabilitarModulo = async (req, res) => {
	if(typeof req.body.id === "undefined"){
		return res.json({
			success: false,
			trace: "",
			errors: [
				"Faltan parametros."
			]
		})
	}
	var deshabilitarModuloResult = await ServicioDeshabilitarModulo.deshabilitarModulo(req.body.id)
	if(deshabilitarModuloResult.success){
		res.json({
			success: true,
			trace: deshabilitarModuloResult.trace,
			errors: []
		})
	}
	else{
		res.json({
			success: false,
			trace: "",
			errors: deshabilitarModuloResult.errors
		})
	}
}

exports.obtenerModulo = async (req, res) => {
	if(req.body.id == undefined){
		return res.json({
			success: false,
			trace: "",
			errors: ["Faltan parametros."]
		})
	}
	var moduloData = {
		id: req.body.id
	}
	res.json(await ServicioListarModulo.obtenerModulo(moduloData))
}

exports.listarModulos = async (req, res) => {
	res.json(await ServicioListarModulo.listarModulos())
}

exports.listarModuloPorCarrera = async (req, res) => {
	if(req.body.idCarrera == undefined){
		return res.json({
			success: false,
			trace: "",
			errors: ["Faltan parametros."]
		})
	}
	res.json(await ServicioListarModulo.listarModuloPorCarrera(idCarrera))
}

exports.listarModuloPorCasaEstudio = async (req, res) => {
	if(req.body.idCasaEstudio == undefined){
		return res.json({
			success: false,
			trace: "",
			errors: ["Faltan parametros"]
		})
	}
	res.json(await ServicioListarModulo.listarModuloPorCasaEstudio(idCasaEstudio))
}



