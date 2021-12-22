const UsuarioRolModuloSubscripcion = require("../../models/").UsuarioRolModuloSubscripcion

var obtenerUsuarioRolModuloSubscripcion = async function (urmsData){
	return UsuarioRolModuloSubscripcion.findOne({
		where:{
			estado: 1,
			id: urmsData.id
		}
	})
	.then(urms => {
		if(!urms){
			return Promise.reject({errors: ["No se ha encontrado la asociacion"]})
		}
		return {
			success: true,
			trace: urms,
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["Error en la base de datos."]
		}
	})
}

var listarUsuarioRolModuloSubscripcion = async function(){
	return UsuarioRolModuloSubscripcion.findAll({
		where:{
			estado: 1
		}
	})
	.then(urmsS => {
		if(!urmsS){
			return Promise.reject({errors: ["No se ha encontrado la asociacion"]})
		}
		return {
			success: true,
			trace: urmsS,
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["Error en la base de datos."]
		}
	})
}

var listarUsuarioRolModuloSubscripcionPorUsuarioRol = async function (idUsuarioRol){
	return UsuarioRolModuloSubscripcion.findAll({
		where:{
			estado: 1,
			idUsuarioRol: idUsuarioRol
		}
	})
	.then(urmsS => {
		if(!urmsS){
			return Promise.reject({errors: ["No se ha encontrado la asociacion"]})
		}
		return {
			success: true,
			trace: urmsS,
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["Error en la base de datos."]
		}
	})
}

var listarUsuarioRolModuloSubscripcionPorModulo = async function (idModulo){
	return UsuarioRolModuloSubscripcion.findAll({
		where:{
			estado: 1,
			idModulo: idModulo
		}
	})
	.then(urmsS => {
		if(!urmsS){
			return Promise.reject({errors: ["No se ha encontrado la asociacion"]})
		}
		return {
			success: true,
			trace: urmsS,
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["Error en la base de datos."]
		}
	})
}

module.exports.obtenerUsuarioRolModuloSubscripcion = obtenerUsuarioRolModuloSubscripcion;
module.exports.listarUsuarioRolModuloSubscripcion = listarUsuarioRolModuloSubscripcion;
module.exports.listarUsuarioRolModuloSubscripcionPorModulo = listarUsuarioRolModuloSubscripcionPorModulo;
module.exports.listarUsuarioRolModuloSubscripcionPorUsuarioRol = listarUsuarioRolModuloSubscripcionPorUsuarioRol;