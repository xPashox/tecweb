const ServicioCrearUsuarioRolCarrera = require("../Servicios/UsuarioRolCarrera/servicioCrearUsuarioRolCarrera.js")
const ServicioDeshabilitarUsuarioRolCarrera = require("../Servicios/UsuarioRolCarrera/servicioDeshabilitarUsuarioRolCarrera.js")
const ServicioEditarUsuarioRolCarrera = require("../Servicios/UsuarioRolCarrera/servicioEditarUsuarioRolCarrera.js")
const ServicioEliminarUsuarioRolCarrera = require("../Servicios/UsuarioRolCarrera/servicioEliminarUsuarioRolCarrera.js")
const ServicioHabilitarUsuarioRolCarrera = require("../Servicios/UsuarioRolCarrera/servicioHabilitarUsuarioRolCarrera.js")
const ServicioListarUsuarioRolCarrera = require("../Servicios/UsuarioRolCarrera/servicioListarUsuarioRolCarrera.js")
/*
		idUsuarioRol: {
      type: DataTypes.INTEGER,
      references: {
        model: 'UsuarioRol',
        key: 'id'
      }
    },
    idCarrera: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Carrera',
        key: 'id'
      }
    },
    estado: DataTypes.INTEGER
*/

exports.crearUsuarioRolCarrera = async (req, res) => {
	if(req.body.idUsuarioRol == undefined ||
		req.body.idCarrera == undefined)
	{
		return res.json({
			success: false,
			trace: "",
			errors: ["Faltan datos."]
		})
	}
	const usuarioRolCarreraData = {
		idUsuarioRol: req.body.idUsuarioRol,
		idCarrera: req.body.idCarrera,
		estado: 1
	}
	var crearUsuarioRolCarreraResult = await ServicioCrearUsuarioRolCarrera.crearUsuarioRolCarrera(usuarioRolCarreraData)
	if(crearUsuarioRolCarreraResult.success){
		res.json({
			success: true,
			trace: crearUsuarioRolCarreraResult.trace,
			errors: []
		})
	}
	else{
		res.json({
			success: false,
			trace: "",
			errors: crearUsuarioRolCarreraResult.errors
		})
	}
}

exports.editarUsuarioRolCarrera = async (req, res) => {
	if(req.body.idUsuarioRol == undefined ||
		req.body.idCarrera == undefined ||
		req.body.id == undefined)
	{
		return res.json({
			success: false,
			trace: "",
			errors: ["Faltan datos."]
		})
	}
	const usuarioRolCarreraData = {
		id: req.body.id,
		idUsuarioRol: req.body.idUsuarioRol,
		idCarrera: req.body.idCarrera
	}
	var editarUsuarioRolCarreraResult = await ServicioEditarUsuarioRolCarrera.editarUsuarioRolCarrera(usuarioRolCarreraData)
	if(editarUsuarioRolCarreraResult.success){
		res.json({
			success: true,
			trace: editarUsuarioRolCarreraResult.trace,
			errors: []
		})
	}
	else{
		res.json({
			success: false,
			trace: "",
			errors: editarUsuarioRolCarreraResult.errors
		})
	}
}

exports.habilitarUsuarioRolCarrera = async (req, res) => {
	if(req.body.id == undefined){
		return res.json({
			success: false,
			trace: "",
			errors:["Faltan datos."]
		})
	}
	var habilitarUsuarioRolCarreraResult = await ServicioHabilitarUsuarioRolCarrera.habilitarUsuarioRolCarrera(req.body.id)
	if(habilitarUsuarioRolCarreraResult.success){
		res.json({
			success: true,
			trace: habilitarUsuarioRolCarreraResult.trace,
			errors: []
		})
	}
	else{
		res.json({
			success: false,
			trace: "",
			errors: habilitarUsuarioRolCarreraResult.errors
		})
	}
}

exports.deshabilitarUsuarioRolCarrera = async (req, res) => {
	if(req.body.id == undefined){
		return res.json({
			success: false,
			trace: "",
			errors:["Faltan datos."]
		})
	}
	var deshabilitarUsuarioRolCarreraResult = await ServicioDeshabilitarUsuarioRolCarrera.deshabilitarUsuarioRolCarrera(req.body.id)
	if(deshabilitarUsuarioRolCarreraResult.success){
		res.json({
			success: true,
			trace: deshabilitarUsuarioRolCarreraResult.trace,
			errors: []
		})
	}
	else{
		res.json({
			success: false,
			trace: "",
			errors: deshabilitarUsuarioRolCarreraResult.errors
		})
	}
}

exports.eliminarUsuarioRolCarrera = async (req, res) => {
	if(req.body.id == undefined){
		return res.json({
			success: false,
			trace: "",
			errors:["Faltan datos."]
		})
	}
	var eliminarUsuarioRolCarreraResult = await ServicioEliminarUsuarioRolCarrera.eliminarUsuarioRolCarrera(req.body.id)
	if(eliminarUsuarioRolCarreraResult.success){
		res.json({
			success: true,
			trace: eliminarUsuarioRolCarreraResult.trace,
			errors: []
		})
	}
	else{
		res.json({
			success: false,
			trace: "",
			errors: eliminarUsuarioRolCarreraResult.errors
		})
	}
}

exports.obtenerUsuarioRolCarrera = async (req, res) => {
	if(req.body.id == undefined){
		return res.json({
			success: false,
			trace: "",
			errors: ["Faltan datos."]
		})
	}
	const urCarreraData = {
		id: req.body.id
	}
	res.json(await ServicioListarUsuarioRolCarrera.obtenerUsuarioRolCarrera(urCarreraData))
}

exports.listarUsuarioRolCarrera = async (req, res) => {
	res.json(await ServicioListarUsuarioRolCarrera.listarUsuarioRolCarrera())
}

exports.listarUsuarioRolCarreraPorCarrera = async (req, res) => {
	if(req.body.idCarrera == undefined){
		return res.json({
			success: false,
			trace: "",
			errors: ["Faltan datos."]
		})
	}
	res.json(await ServicioListarUsuarioRolCarrera.listarUsuarioRolCarreraPorCarrera(req.body.idCarrera))
}

exports.listarUsuarioRolCarreraPorUsuarioRol = async (req, res) => {
	if(req.body.idUsuarioRol == undefined){
		return res.json({
			success: false,
			trace: "",
			errors: ["Faltan datos."]
		})
	}
	res.json(await ServicioListarUsuarioRolCarrera.listarUsuarioRolCarreraPorUsuarioRol(req.body.idUsuarioRol))
}
