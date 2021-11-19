const UsuarioRolCarrera = require("../../models/").UsuarioRolCarrera

//Metodo desarrollado solo para administrador
var eliminarUsuarioRolCarrera = async function (id){
	return UsuarioRolCarrera.delete({
		where:{
			id: id
		}
	})
	.then(result => {
		if(result[0] == 0){
			return Promise.reject({
				errors: ["No se ha encontrado el usuario a eliminar."]
			})
		}
		return {
			success: true,
			trace: "Usuario eliminado de la carrera.",
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

module.exports.eliminarUsuarioRolCarrera = eliminarUsuarioRolCarrera;