const Usuario = require("../models/").Usuario
const bcrypt = require("bcrypt")
var ServicioCrearUsuario = require("../Servicios/Usuario/servicioCrearUsuario")
var ServicioDeshabilitarUsuario = require("../Servicios/Usuario/servicioDeshabilitarUsuario")
var ServicioHabilitarUsuario = require("../Servicios/Usuario/servicioHabilitarUsuario")
var ServicioEditarUsuario = require("../Servicios/Usuario/servicioEditarUsuario")
var ServicioListarUsuario = require("../Servicios/Usuario/servicioListarUsuario")
var ServicioListarUsuarios = require("../Servicios/Usuario/servicioListarUsuarios")
var ServicioLogin = require("../Servicios/Usuario/servicioLogin")

//Falta añadir verificación de tipo de usuario

exports.crearUsuario = async (req, res) => {
	if(req.body.email == "" || req.body.email == null ||
			req.body.nombres == "" || req.body.nombres == null ||
			req.body.apellidos == "" || req.body.apellidos == null ||
			req.body.clave == "" || req.body.clave == null ||
			req.body.rol < 1 || req.body.rol > 4)
	{
		return res.json({
			success: false,
			trace: "",
			errors: ["Usuario no valido."]
		})
	}
	const usuarioData = {
		email: req.body.email,
		nombres: req.body.nombres,
		apellidos: req.body.apellidos,
		clave: await bcrypt.hash(req.body.clave,10),
		estado: 1,
		rol: req.body.rol
	}
	var crearUsuarioResult = await ServicioCrearUsuario.crearUsuario(usuarioData)
	if(crearUsuarioResult.success){
		res.json({
			success: true,
			trace: crearUsuarioResult.trace,
			errors:[]
		})
	}
	else{
		res.json({
			success: false,
			trace: "",
			errors: crearUsuarioResult.errors
		})
	}
}

exports.deshabilitarUsuario = async (req, res) => {
	if(req.body.id == "" || req.body.id == null){
		return res.json({
			success: false,
			trace: "",
			errors:[
				"Faltan datos."
			]
		})
	}
	var deshabilitarUsuarioResult = await ServicioDeshabilitarUsuario.deshabilitarUsuario(req.body.id)
	if(deshabilitarUsuarioResult.success){
		res.json({
			success: true,
			trace: deshabilitarUsuarioResult.trace,
			errors: []
		})
	}
	else{
		res.json({
			success: false,
			trace: "",
			errors: deshabilitarUsuarioResult.errors
		})
	}
}

exports.habilitarUsuario = async (req, res) => {
	if(req.body.id == "" || req.body.id == null){
			return res.json({
				success: false,
				trace: "",
				errors:[
					"Faltan datos."
				]
			})
		}
		var habilitarUsuarioResult = await ServicioHabilitarUsuario.habilitarUsuario(req.body.id)
		if(habilitarUsuarioResult.success){
			res.json({
				success: true,
				trace: habilitarUsuarioResult.trace,
				errors:[

				]
			})
		}
		else{
			res.json({
				success: false,
				trace: "",
				errors: habilitarUsuarioResult.errors
			})
		}
}

exports.editarUsuario = async (req, res) => {
	if(req.body.email == "" || req.body.email == null ||
			req.body.nombres == "" || req.body.nombres == null ||
			req.body.apellidos == "" || req.body.apellidos == null ||
			req.body.clave == "" || req.body.clave == null)
	{
		return res.status(400).json({
			success: false,
			trace: "",
			errors:[
				"Faltan parametros requeridos."
			]
		})
	}
	else{
		const usuarioData = {
			email: req.body.email,
			nombres: req.body.nombres,
			apellidos: req.body.apellidos,
			clave: req.body.clave,
		}
		var editResult =  await ServicioEditarUsuario.editarUsuario(usuarioData)
		if(editResult.success){
			res.json({
				success: true,
				trace: editResult.trace,
				errors: []
			})
		}
		else{
			res.json({
				success: false,
				trace: "",
				errors: editResult.errors
			})
		}
	}
}

exports.listarUsuario = async (req, res) => {
	if(req.body.email == "" || req.body.email == null){
		return res.json({
			success: false,
			trace: "",
			errors:[
				"Email no válido."
			]
		})
	}
	var listarUsuarioResult = await ServicioListarUsuario.listarUsuario(req.body.email)
	if(listarUsuarioResult.success){
		res.json({
				success: true,
				trace: listarUsuarioResult.trace,
				errors: []
		})
	}
	else{
		res.json({
				success: false,
				trace: "",
				errors: listarUsuarioResult.errors
		})
	}
}

exports.listarUsuarios = async (req, res) => {
	var listarUsuariosResult = await ServicioListarUsuarios.listarUsuarios()
	if(listarUsuariosResult.success){
		res.json({
			success: true,
			trace: listarUsuariosResult.trace,
			errors:[]
		})
	}
	else{
		res.json({
			success: false,
			trace: "",
			errors: listarUsuariosResult.errors
		})
	}
}

/**
 *
 */
exports.login = async (req, res) => {
	if (req.body.email == "" || req.body.password == ""){
		return res.json({
			success: false,
			trace: "",
			errors:[
				"Usuario no válido."
			]
		})
	}
	/* Llamada Servicio Login */
	const usuarioData = {
		email: req.body.email,
		clave: req.body.clave
	}
	var loginresult = await ServicioLogin.iniciarSesion(usuarioData)
	if (loginresult.success){
		res.status(200).json({
			success: true,
			trace: loginresult.trace
		})
	}
	else{
		res.status(400).json({
			success : false,
			trace: loginresult.trace
		})
	}
}