const Carrera = require("../models/").Carrera
const ServicioCrearCarrera = require("../Servicios/servicioCrearCarrera")
const ServicioDeshabilitarCarrera = require("../Servicios/servicioDeshabilitarCarrera")
const ServicioHabilitarCarrera = require("../Servicios/servicioHabilitarCarrera")
const ServicioEditarCarrera = require("../Servicios/servicioEditarCarrera")
		/*id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idCasaEstudio: {
      type: DataTypes.INTEGER,
      references: {
        model: 'CasaEstudio',
        key: 'id'
      }
    },
    nombre: DataTypes.TEXT,
    emailContacto: DataTypes.TEXT,
    telefono: DataTypes.TEXT*/
exports.crearCarrera = async (req, res) => {
	if(typeof req.body.idCasaEstudio === "undefined" ||
		 typeof req.body.nombre === "undefined" ||
		 typeof req.body.emailContacto === "undefined" ||
		 typeof req.body.telefono === "undefined"){
		return res.json({
			success: false,
			trace: "",
			errors: [
				"Faltan parametros."
			]
		})
	}
	const carreraData = {
		idCasaEstudio: req.body.idCasaEstudio,
		nombre: req.body.nombre,
		emailContacto: req.body.emailContacto,
		telefono: req.body.telefono
	}
	var crearCarreraResult = await ServicioCrearCarrera.crearCarrera(carreraData)
	if(crearCarreraResult.success){
		res.json({
			success: true,
			trace: crearCarreraResult.trace,
			errors:[]
		})
	}
	else{
		res.json({
			success: false,
			trace: "",
			errors: crearCarreraResult.errors
		})
	}
	//Implementar Servicio de Carrera
}

exports.editarCarrera = async (req, res) => {
	if(typeof req.body.idCasaEstudio === "undefined" ||
		 typeof req.body.nombre === "undefined" ||
		 typeof req.body.emailContacto === "undefined" ||
		 typeof req.body.telefono === "undefined" ||
		 typeof req.body.id === "undefined"){
		return res.json({
			success: false,
			trace: "",
			errors: [
				"Faltan parametros."
			]
		})
	}
	const carreraData = {
		id: req.body.id,
		idCasaEstudio: req.body.idCasaEstudio,
		nombre: req.body.nombre,
		emailContacto: req.body.emailContacto,
		telefono: req.body.telefono
	}
	var editarCarreraResult = await ServicioEditarCarrera.editarCarrera(carreraData)
	if(editarCarreraResult.success){
		res.json({
			success: true,
			trace: editarCarreraResult.trace,
			errors: []
		})
	}
	else{
		res.json({
			success: false,
			trace: "",
			errors: editarCarreraResult.errors
		})
	}
}

exports.habilitarCarrera = async (req, res) => {
	if(typeof req.body.id === "undefined"){
		return res.json({
			success: false,
			trace: "",
			errors: [
				"Faltan parametros."
			]
		})
	}
	var habilitarCarreraResult = await ServicioHabilitarCarrera.habilitarCarrera(req.body.id)
	if(habilitarCarreraResult.success){
		res.json({
			success: true,
			trace: habilitarCarreraResult.trace,
			errors: []
		})
	}
	else{
		res.json({
			success: false,
			trace: "",
			errors: habilitarCarreraResult.errors
		})
	}
}

exports.deshabilitarCarrera = async (req, res) => {
	if(typeof req.body.id === "undefined"){
		return res.json({
			success: false,
			trace: "",
			errors: [
				"Faltan parametros."
			]
		})
	}
	var deshabilitarCarreraResult = await ServicioDeshabilitarCarrera.deshabilitarCarrera(req.body.id)
	if(deshabilitarCarreraResult.success){
		res.json({
			success: true,
			trace: deshabilitarCarreraResult.trace,
			errors: []
		})
	}
	else{
		res.json({
			success: false,
			trace: "",
			errors: deshabilitarCarreraResult.errors
		})
	}
}