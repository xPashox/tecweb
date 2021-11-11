const express = require("express")

exports.verificarRolAdministrador = (req, res, next) => {

	const rolUsuario = req.decoded.rol;
	if(rolUsuario != 1){
		return res.status(401).json({
			success: false,
			trace: "",
			errors: ["Rol no válido para esta operación"]
		})
	}
	next()
}

exports.verificarRolEncargado = (req, res, next) => {

	const rolUsuario = req.decoded.rol;
	if(rolUsuario != 2){
		return res.status(401).json({
			success: false,
			trace: "",
			errors: ["Rol no válido para esta operación"]
		})
	}
	next()
}

exports.verificarRolProfesor = (req, res, next) => {

	const rolUsuario = req.decoded.rol;
	if(rolUsuario != 3){
		return res.status(401).json({
			success: false,
			trace: "",
			errors: ["Rol no válido para esta operación"]
		})
	}
	next()
}

exports.verificarRolEstudiante = (req, res, next) => {

	const rolUsuario = req.decoded.rol;
	if(rolUsuario != 4){
		return res.status(401).json({
			success: false,
			trace: "",
			errors: ["Rol no válido para esta operación"]
		})
	}
	next()
}

exports.verificarRolAdmnistradorOEncargado = (req, res, next) => {

	const rolUsuario = req.decoded.rol;
	if(rolUsuario != 1 && rolUsuario != 2){
		return res.status(401).json({
			success: false,
			trace: "",
			errors: ["Rol no válido para esta operación"]
		})
	}
	next()
}

exports.verificarRolProfesorOEstudiante = (req, res, next) => {

	const rolUsuario = req.decoded.rol;
	if(rolUsuario != 3 && rolUsuario != 4){
		return res.status(401).json({
			success: false,
			trace: "",
			errors: ["Rol no válido para esta operación"]
		})
	}
	next()
}
