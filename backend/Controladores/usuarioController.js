const Usuario = require("../models/").Usuario
const bcrypt = require("bcrypt")
var ServicioCrearUsuario = require("../Servicios/servicioCrearUsuario")
var ServicioDeshabilitarUsuario = require("../Servicios/servicioDeshabilitarUsuario")
var ServicioHabilitarUsuario = require("../Servicios/servicioHabilitarUsuario")
var ServicioEditarUsuario = require("../Servicios/servicioEditarUsuario")
var ServicioListarUsuario = require("../Servicios/servicioListarUsuario")
var ServicioListarUsuarios = require("../Servicios/servicioListarUsuarios")
var ServicioLogin = require("../Servicios/servicioLogin")

//Falta añadir verificación de tipo de usuario

exports.crearUsuario = async (req, res) => {
	if(req.body.email != "" && req.body.email != null &&
			req.body.nombres != "" && req.body.nombres != null &&
			req.body.apellidos != "" && req.body.apellidos != null &&
			req.body.clave != "" && req.body.clave != null &&
			req.body.rol >= 1 && req.body.rol <= 4)
	{
		const usuarioData = {
			email: req.body.email,
			nombres: req.body.nombres,
			apellidos: req.body.apellidos,
			clave: await bcrypt.hash(req.body.clave,10),
			estado: 1,
			rol: req.body.rol
		}

		res.json({
			codigo: await ServicioCrearUsuario.crearUsuario(usuarioData), //Responde con 4 distintos codigos
			emai: req.body.email
		})
	}
	else(
		res.json({
			codigo: 0
		})
	)

}

exports.deshabilitarUsuario = async (req, res) => {
	if(req.body.email != "" && req.body.email != null){
		res.json({
			codigo: await ServicioDeshabilitarUsuario.deshabilitarUsuario(req.body.email),
			email: req.body.email
		})
	}
	else{
		res.json({
			codigo: 0 //Codigo 0 -> Error general
		})
	}
}

exports.habilitarUsuario = async (req, res) => {
	if(req.body.email != "" && req.body.email != null){
			res.json({
				codigo: await ServicioHabilitarUsuario.habilitarUsuario(req.body.email),
				email: req.body.email
			})
		}
		else{
			res.json({
				codigo: 0 //Codigo 0 -> Error general
			})
		}
}

exports.editarUsuario = async (req, res) => {
	if(req.body.email != "" && req.body.email != null &&
			req.body.nombres != "" && req.body.nombres != null &&
			req.body.apellidos != "" && req.body.apellidos != null &&
			req.body.clave != "" && req.body.clave != null)
	{
		const usuarioData = {
			email: req.body.email,
			nombres: req.body.nombres,
			apellidos: req.body.apellidos,
			clave: req.body.clave,
		}

		res.json({
			codigo: await ServicioEditarUsuario.editarUsuario(usuarioData), //Responde con 4 distintos codigos
			emai: req.body.email
		})
	}
	else(
		res.json({
			codigo: 0
		})
	)
}

exports.listarUsuario = async (req, res) => {
	if(req.body.email != "" && req.body.email != null){
		res.json({
			codigo: 1,
			usuario: await ServicioListarUsuario.listarUsuario(req.body.email)
		})
	}
	else{
		res.json({
			codigo: 0
		})
	}
}

exports.listarUsuarios = async (req, res) => {

	res.json({
		listaUsuarios: await ServicioListarUsuarios.listarUsuarios()
	})

}

/**
 * 
 */
exports.login = async (req, res) => {
	if (req.body.email == "" || req.body.password == ""){
		res.json({
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