const Carrera = require("../../models/").Carrera

var obtenerCarrera = async function (obtenerCarreraData){
	return Carrera.findOne({
		where:{
			id: listarCarreraData.id,
		}
	})
	.then(carrera => {
		if(!carrera){
			return Promise.reject({errors: ["La carrera no existe."]})
		}
		return {
			success: true,
			trace: carrera,
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["Error con la conexion a la base de datos."]
		}
	})
}

var listarCarreras = async function (){
	return Carrera.findAll({
		where:{
			estado: 1
		}
	})
	.then(result => {
		if(!result){
			return Promise.reject({errors: ["No existen carreras disponibles."]})
		}
		return {
			success: true,
			trace: result,
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["Problemas en la conexion a la base de datos."]
		}
	})
}

var listarCarrerasPorCasaEstudio = async function (idCasaEstudio){
	return Carrera.findAll({
		where:{
			idCasaEstudio: idCasaEstudio
		}
	})
	.then(result => {
		if(!result){
			return Promise.reject({errors: ["No se encuentran carreras dentro de esta casa de estudio."]})
		}
		return {
			success: true,
			trace: result,
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["Problemas en la conexion a la base de datos."]
		}
	})
}

module.exports.obtenerCarrera = obtenerCarrera;
module.exports.listarCarreras = listarCarreras;
module.exports.listarCarrerasPorCasaEstudio = listarCarrerasPorCasaEstudio;
