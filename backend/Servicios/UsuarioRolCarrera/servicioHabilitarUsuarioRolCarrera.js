const UsuarioRolCarrera = require("../../models/").UsuarioRolCarrera

var habilitarUsuarioRolCarrera = async function(id){
	return UsuarioRolCarrera.update({
		estado: 1
	},{
		where:{
			id: id
		}
	})
	.then(result => {
		if(result[0] == 0){
			return Promise.reject({
				errors: ["El id indicado no existe."]
			})
		}
		return {
			success: true,
			trace: "El usuario ha sido habilitado con exito.",
			errors: []
		}
	})
	.catch(err => {
		var errors = ["No se ha podido conectar a la base de datos."]
		if(err.errors !== undefined)
			errors = err.errors
		return {
			success: false,
			trace: "",
			errors: errors
		}
	})
}

module.exports.habilitarUsuarioRolCarrera = habilitarUsuarioRolCarrera;