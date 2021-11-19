const UsuarioRolCarrera = require("../../models/").UsuarioRolCarrera

var crearUsuarioRolCarrera = async function (usuarioRolCarreraData){
	return UsuarioRolCarrera.findOne({
		where:{
			idUsuarioRol: usuarioRolCarreraData.idUsuarioRol,
			idCarrera: usuarioRolCarreraData.idCarrera
		}
	})
	.then(usuarioRolCarrera => {
		if(usuarioRolCarrera){
			return Promise.reject({
				success: false,
				trace: "",
				errors: ["El usuario ya se encuentra registrado con este rol en esta carrera."]
			})
		}
		return UsuarioRolCarrera.create(usuarioRolCarreraData)
		.then(result => {
			return {
				success: true,
				trace: "El usuario fue registrado correctamente en la carrera.",
				errors: []
			}
		})
		.catch(err => {
			return {
				success: false,
				trace: "",
				errors: ["No se pudo registrar al usuario en la carrera."]
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
		return {
			success: false,
			trace: "",
			errors: ["No se pudo conectar con la base de datos."]
		}
	})
}

module.exports.crearUsuarioRolCarrera = crearUsuarioRolCarrera;