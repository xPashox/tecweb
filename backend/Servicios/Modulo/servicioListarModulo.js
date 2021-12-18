const Modulo = require("../../models/").Modulo
const UsuarioRolModulo = require("../../models/").UsuarioRolModulo

var obtenerModulo = async function (id){
	return Modulo.findOne({
		where:{
			id: id
		}
	})
	.then(modulo => {
		if(!modulo){
			return Promise.reject({errors: ["El modulo no existe."]})
		}
		return {
			success: true,
			trace: modulo,
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["Error en la conexion a la base de datos."]
		}
	})
}

var listarModulos = async function(){
	return Modulo.findAll({
		where:{
			estado: 1
		}
	})
	.then(modulos => {
		if(!modulos){
			return Promise.reject({errors: ["Ningun modulo fue encontrado."]})
		}
		return {
			success: true,
			trace: modulos,
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["Error en la conexion a la base de datos."]
		}
	})
}

var listarModuloPorCarrera = async function (idCarrera){
	return Modulo.findAll({
		where:{
			estado: 1,
			idCarrera: idCarrera
		}
	})
	.then(modulos => {
		if(!modulos){
			return Promise.reject({errors: ["Ningun modulo fue encontrado."]})
		}
		return {
			success: true,
			trace: modulos,
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["Error en la conexion a la base de datos."]
		}
	})
}

var listarModuloPorCasaEstudio = async function (idCasaEstudio){
	return Modulo.findAll({
		where:{
			estado: 1,
			idCasaEstudio: idCasaEstudio
		}
	})
	.then(modulos => {
		if(!modulos){
			return Promise.reject({errors: ["Ningun modulo fue encontrado."]})
		}
		return {
			success: true,
			trace: modulos,
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["Error en la conexion a la base de datos."]
		}
	})
}

var listarModulosInscritosConNombre = async function(idUsuarioRol){
	return Modulo.findAll({
		include:[{
			model: UsuarioRolModulo,
			required: true,
			where:{
				idUsuarioRol: idUsuarioRol
			}
		}],

	})
}

module.exports.obtenerModulo = obtenerModulo;
module.exports.listarModulos = listarModulos;
module.exports.listarModuloPorCarrera = listarModuloPorCarrera;
module.exports.listarModuloPorCasaEstudio = listarModuloPorCasaEstudio;