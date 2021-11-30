const URMSR = require("../../models/").UsuarioRolModuloSalaReserva

var editarUsuarioRolModuloSalaReserva = async function (urmsrData){
	return URMSR.findOne({
		where:{
			idUsuarioRol: urmsrData.idUsuarioRol,
			idModuloSala: urmsrData.idModuloSala
		}
	})
	.then(reserva => {
		if(reserva && reserva.id != urmsrData.id){
			return Promise.reject({errors: ["La reserva ya existe."]})
		}
		return URMSR.update({
			idUsuarioRol: urmsrData.idUsuarioRol,
			idModuloSala: urmsrData.idModuloSala,
			fecha: urmsrData.fecha
		},{
			where:{
				id: urmsrData.id
			}
		})
		.then(result => {
			//Enviar correo
			if(result[0] == 0)
				return Promise.reject({errors: ["La reserva no existe."]})
			return {
				success: true,
				trace: "Reserva realizada exitosamente.",
				errors: []
			}
		})
		.catch(err => {
			return {
				success: false,
				trace: "",
				errors: err.errors!=undefined?err.errors:["No se ha podido editar la reserva."]
			}
		})
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["No se ha podido conectar con la base de datos."]
		}
	})
}

module.exports.editarUsuarioRolModuloSalaReserva = editarUsuarioRolModuloSalaReserva