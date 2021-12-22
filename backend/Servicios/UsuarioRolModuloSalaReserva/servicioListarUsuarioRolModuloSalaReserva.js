const UsuarioRolModuloSalaReserva = require("../../models/").UsuarioRolModuloSalaReserva

var obtenerUsuarioRolModuloSalaReserva = async function(urmsrData){
	return UsuarioRolModuloSalaReserva.findOne({
		where:{
			estado: 1,
			id: urmsrData.id
		}
	})
	.then(urmsr => {
		if(!urmsr){
			return Promise.reject({errors: ["No se ha encontrado la asociacion"]})
		}
		return {
			success: true,
			trace: urmsr,
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

var listarUsuarioRolModuloSalaReserva = async function (){
	return UsuarioRolModuloSalaReserva.findAll({
		where:{
			estado: 1,
		}
	})
	.then(urmsrS => {
		if(!urmsrS){
			return Promise.reject({errors: ["No se ha encontrado la asociacion"]})
		}
		return {
			success: true,
			trace: urmsrS,
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

var listarUsuarioRolModuloSalaReservaPorUsuarioRol = async function(idUsuarioRol){
	return UsuarioRolModuloSalaReserva.findAll({
		where:{
			estado: 1,
			idUsuarioRol: idUsuarioRol
		}
	})
	.then(urmsrS => {
		if(!urmsrS){
			return Promise.reject({errors: ["No se ha encontrado la asociacion"]})
		}
		return {
			success: true,
			trace: urmsrS,
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

var listarUsuarioRolModuloSalaReservaPorModuloSala = async function(idSalaReserva){
	return UsuarioRolModuloSalaReserva.findAll({
		where:{
			estado: 1,
			idSalaReserva: idSalaReserva
		}
	})
	.then(urmsrS => {
		if(!urmsrS){
			return Promise.reject({errors: ["No se ha encontrado la asociacion"]})
		}
		return {
			success: true,
			trace: urmsrS,
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

module.exports.obtenerUsuarioRolModuloSalaReserva = obtenerUsuarioRolModuloSalaReserva;
module.exports.listarUsuarioRolModuloSalaReserva = listarUsuarioRolModuloSalaReserva;
module.exports.listarUsuarioRolModuloSalaReservaPorModuloSala = listarUsuarioRolModuloSalaReservaPorModuloSala;
module.exports.listarUsuarioRolModuloSalaReservaPorUsuarioRol = listarUsuarioRolModuloSalaReservaPorModuloSala;