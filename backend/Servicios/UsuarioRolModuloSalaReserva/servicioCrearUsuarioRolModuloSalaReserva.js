const URMSR = require("../../models/").UsuarioRolModuloSalaReserva

var crearUsuarioRolModuloSalaReserva = async function (urmsrData){
	return URMSR.findOne({
		where:{
			idUsuarioRol: urmsrData.idUsuarioRol,
			idModuloSala: urmsrData.idModuloSala
		}
	})
	.then(reserva => {
		if(reserva){
			return Promise.reject({errors: ["La reserva ya existe."]})
		}
		URMSR.create(urmsrData)
		.then(result => {
			//Enviar correo
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
				errors: ["No se ha podido crear la reserva."]
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

module.exports.crearUsuarioRolModuloSalaReserva = crearUsuarioRolModuloSalaReserva