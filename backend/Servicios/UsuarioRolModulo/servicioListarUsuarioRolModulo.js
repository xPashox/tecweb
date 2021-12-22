const UsuarioRolModulo = require("../../models/").UsuarioRolModulo

var obtenerUsuarioRolModulo = async function (usuarioRolModuloData){
	return UsuarioRolModulo.findOne({
		where:{
			estado: 1,
			id: usuarioRolModuloData.id
		}
	})
	.then(usuarioRolModulo => {
		if(!usuarioRolModulo){
			return Promise.reject({errors: ["No se ha encontrado la asociacion, puede estar desactivada"]})
		}
		return {
			success: true,
			trace: usuarioRolModulo,
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["Error en la base de datos"]
		}
	})
}

var listarUsuarioRolModulo = async function (){
	return UsuarioRolModulo.findAll({
		where:{
			estado: 1
		}
	})
	.then(usuarioRolModulos => {
		if(!usuarioRolModulos){
			return Promise.reject({errors: ["No se han encontrado asociaciones activas."]})
		}
		return {
			success: true,
			trace: usuarioRolModulo,
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["Error en la base de datos"]
		}
	})
}

var listarUsuarioRolModuloPorModulo = async function (idModulo){
	return UsuarioRolModulo.findAll({
		where:{
			estado: 1,
			idModulo: idModulo
		}
	})
	.then(usuarioRolModulos => {
		if(!usuarioRolModulos){
			return Promise.reject({errors: ["No se han encontrado asociaciones activas."]})
		}
		return {
			success: true,
			trace: usuarioRolModulo,
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["Error en la base de datos"]
		}
	})
}

var listarUsuarioRolModuloPorUsuarioRol = async function (idUsuarioRol){
	return UsuarioRolModulo.findAll({
		where:{
			estado: 1,
			idUsuarioRol: idUsuarioRol
		}
	})
	.then(usuarioRolModulos => {
		if(!usuarioRolModulos){
			return Promise.reject({errors: ["No se han encontrado asociaciones activas."]})
		}
		return {
			success: true,
			trace: usuarioRolModulo,
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["Error en la base de datos"]
		}
	})
}

module.exports.obtenerUsuarioRolModulo = obtenerUsuarioRolModulo;
module.exports.listarUsuarioRolModulo = listarUsuarioRolModulo;
module.exports.listarUsuarioRolModuloPorUsuarioRol = listarUsuarioRolModuloPorUsuarioRol;
module.exports.listarUsuarioRolModuloPorModulo = listarUsuarioRolModuloPorModulo;