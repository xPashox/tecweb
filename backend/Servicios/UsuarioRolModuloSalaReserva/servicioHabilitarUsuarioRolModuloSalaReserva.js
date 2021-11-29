const URMSR = require("../../models/").UsuarioRolModuloSalaReserva

var habilitarUsuarioRolModuloSalaReserva = async function (id) {
	return URMSR.findOne({
		estado: 1
	},{
		where:{
			id: id
		}
	})
	.then(result => {
		if(result[0] == 0)
			return Promise.reject({errors: ["La reserva indicada no existe."]})
		return {
			success: true,
			trace: "Se ha habilitado la reserva.",
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["No se ha podido conectar a la base de datos."]
		}
	})
}

module.exports.habilitarUsuarioRolModuloSalaReserva = habilitarUsuarioRolModuloSalaReserva