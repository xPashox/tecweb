const UsuarioRolCarrera = require("../../models/").UsuarioRolCarrera

var obtenerUsuarioRolCarrera = async function (usuarioRolCarreraData){
	return UsuarioRolCarrera.findOne({
		where:{
			estado:1,
			id: usuarioRolCarreraData.id
		}
	})
	.then(usuarioRolCarrera => {
		if(!usuarioRolCarrera){
			return Promise.reject({errors: ["No se ha encontrado la asociacion"]})
		}
		return {
			success: true,
			trace: usuarioRolCarreraData,
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["Error en la conexion a la base de datos"]
		}
	})
}

var listarUsuarioRolCarrera = async function (){
	return UsuarioRolCarrera.findAll({
		where:{
			estado: 1
		}
	})
	.then(usuarioRolCarreras => {
		if(!usuarioRolCarreras){
			return Promise.reject({errors: ["No se han encontrado asociaciones activas"]})
		}
		return {
			success: true,
			trace: usuarioRolCarreras,
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["Error en la conexion a la base de datos"]
		}
	})
}

var listarUsuarioRolCarreraPorUsuarioRol = async function (idUsuarioRol){
	return UsuarioRolCarrera.findAll({
		where:{
			estado: 1,
			idUsuarioRol: idUsuarioRol
		}
	})
	.then(usuarioRolCarreras => {
		if(!usuarioRolCarreras){
			return Promise.reject({errors: ["No se han encontrado asociaciones activas"]})
		}
		return {
			success: true,
			trace: usuarioRolCarreras,
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["Error en la conexion a la base de datos"]
		}
	})
}

var listarUsuarioRolCarreraPorCarrera = async function (idCarrera){
	return UsuarioRolCarrera.findAll({
		where:{
			estado: 1,
			idCarrera: idCarrera
		}
	})
	.then(usuarioRolCarreras => {
		if(!usuarioRolCarreras){
			return Promise.reject({errors: ["No se han encontrado asociaciones activas"]})
		}
		return {
			success: true,
			trace: usuarioRolCarreras,
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["Error en la conexion a la base de datos"]
		}
	})
}

module.exports.obtenerUsuarioRolCarrera = obtenerUsuarioRolCarrera;
module.exports.listarUsuarioRolCarrera = listarUsuarioRolCarrera;
module.exports.listarUsuarioRolCarreraPorCarrera = listarUsuarioRolCarreraPorCarrera;
module.exports.listarUsuarioRolCarreraPorUsuarioRol = listarUsuarioRolCarreraPorUsuarioRol;