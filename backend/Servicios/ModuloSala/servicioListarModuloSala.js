const ModuloSala = require("../../models/").ModuloSala

var obtenerModuloSala = async function(moduloSalaData){
	return ModuloSala.findOne({
		where:{
			estado: 1,
			id: moduloSalaData.id
		}
	})
	.then(moduloSala => {
		if(!moduloSala){
			return Promise.reject({errors: ["No se encontro dicha sala."]})
		}
		return {
			success: true,
			trace: moduloSala,
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["Problemas con la base de datos."]
		}
	})
}

var listarModuloSala = async function(){
	return ModuloSala.findAll({
		where:{
			estado: 1
		}
	})
	.then(moduloSalas => {
		if(!moduloSalas){
			return Promise.reject({errors: ["No se encontraron modulos salas activos."]})
		}
		return {
			success: true,
			trace: moduloSalas,
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["Problemas con la base de datos."]
		}
	})
}

var listarModuloSalaPorModulo = async function(idModulo){
	return ModuloSala.findAll({
		where:{
			estado: 1,
			idModulo: idModulo
		}
	})
	.then(moduloSalas => {
		if(!moduloSalas){
			return Promise.reject({errors: ["No se encontraron modulos salas activos."]})
		}
		return {
			success: true,
			trace: moduloSalas,
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["Problemas con la base de datos."]
		}
	})
}

var listarModuloSalaPorSala = async function(idSala){
	return ModuloSala.findAll({
		where:{
			estado: 1,
			idSala: idSala
		}
	})
	.then(moduloSalas => {
		if(!moduloSalas){
			return Promise.reject({errors: ["No se encontraron modulos salas activos."]})
		}
		return {
			success: true,
			trace: moduloSalas,
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["Problemas con la base de datos."]
		}
	})
}

module.exports.obtenerModuloSala = obtenerModuloSala;
module.exports.listarModuloSala = listarModuloSala;
module.exports.listarModuloSalaPorSala = listarModuloSalaPorSala;
module.exports.listarModuloSalaPorModulo = listarModuloSalaPorModulo;
