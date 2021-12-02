const urms = require("../../models/").UsuarioRolModuloSubscripcion

var deshabilitarUsuarioRolModuloSubscripcion = async function (id) {
	return urms.findOne({
		estado: 0
	},{
		where:{
			id: id
		}
	})
	.then(result => {
		if(result[0] == 0)
			return Promise.reject({errors: ["La subscripcion indicada no existe."]})
		return {
			success: true,
			trace: "Se ha deshabilitado la subscripcion.",
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

module.exports.deshabilitarUsuarioRolModuloSubscripcion = deshabilitarUsuarioRolModuloSubscripcion