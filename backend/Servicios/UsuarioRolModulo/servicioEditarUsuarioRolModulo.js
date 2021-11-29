const UsuarioRolModulo = require("../../models/").UsuarioRolModulo

var editarUsuarioRolModulo = async function (usuarioRolModuloData){
	return UsuarioRolModulo.findOne({
		where:{
			idUsuarioRol: usuarioRolModuloData.idUsuarioRol,
			idModulo: usuarioRolModuloData.idModulo
		}
	})
	.then(usuarioRolModulo => {
		if(usuarioRolModulo){
			return Promise.reject({errors: ["La relacion ya existe."]})
		}
		return UsuarioRolModulo.update({
			idUsuarioRol: usuarioRolModuloData.idUsuarioRol,
			idModulo: usuarioRolModuloData.idModulo
		},{
			where:{
				id: usuarioRolModuloData.id
			}
		})
		.then(result => {
			if(result[0] == 0){
				return Promise.reject({errors: ["No se ha encontrado la relacion."]})
			}
			return {
				success: true,
				trace: "La relacion fue editada exitosamente.",
				errors: []
			}
		})
		.catch(err => {
			return {
				success: false,
				trace: "",
				errors: err.errors!=undefined?err.errors:["No se ha podido editar la relacion."]
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

module.exports.editarUsuarioRolModulo = editarUsuarioRolModulo;