const UsuarioRolCarrera = require("../../models/").UsuarioRolCarrera

var editarUsuarioRolCarrera = async function(usuarioRolCarreraData){
	return UsuarioRolCarrera.findOne({
		where:{
			idUsuarioRol: usuarioRolCarreraData.idUsuarioRol,
			idCarrera: usuarioRolCarreraData.idCarrera
		}
	})
	.then(usuarioRolCarrrera => {
		if(usuarioRolCarrrera && usuarioRolCarrrera.id != usuarioRolCarreraData.id){
			return Promise.reject({
				success: false,
				trace: "",
				errors: ["Ya existe el usuario en la carrera."]
			})
		}
		return UsuarioRolCarrera.update({
			idUsuarioRol: usuarioRolCarreraData.idUsuarioRol,
			idCarrera: usuarioRolCarreraData.idCarrera
		},{
			where:{
				id: usuarioRolCarreraData.id
			}
		})
		.then(result => {
			if(result[0] == 0){
				return Promise.reject()
			}
			return {
				success: true,
				trace: "Usuario modificado con exito.",
				errors: []
			}
		})
		.catch(err => {
				return {
					success: false,
					trace: "",
					errors: ["No se pudo realizar la modificación."]
				}
		})
	})
	.catch(err => {
		if(err.errors !== undefined){
			return {
				success: false,
				trace: "",
				errors: err.errors
			}
		}
		else{
			return {
				success: false,
				trace: "",
				errors: ["No se pudo conectar a la base de datos."]
			}
		}
	})
}

module.exports.editarUsuarioRolCarrera = editarUsuarioRolCarrera;