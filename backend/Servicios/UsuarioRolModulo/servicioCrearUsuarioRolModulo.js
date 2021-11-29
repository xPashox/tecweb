const UsuarioRolModulo = require("../../models/").UsuarioRolModulo

var crearUsuarioRolModulo = async function (usuarioRolModuloData){
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
		return UsuarioRolModulo.create(usuarioRolModuloData)
		.then(result => {
			return {
				success: true,
				trace: "La relacion fue creada exitosamente.",
				errors: []
			}
		})
		.catch(err => {
			return {
				success: false,
				trace: "",
				errors: ["No se ha podido crear la relacion."]
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

module.exports.crearUsuarioRolModulo = crearUsuarioRolModulo;