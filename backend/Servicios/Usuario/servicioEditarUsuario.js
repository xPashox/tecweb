const Usuario = require("../../models/").Usuario


var editarUsuario = async function (usuarioData){
		return Usuario.findOne({
			where: {
				email: usuarioData.email
			}
		})
		.then(user => {
			if(user != null){
				return Usuario.update({
					email: usuarioData.email,
					nombres: usuarioData.nombres,
					apellidos: usuarioData.apellidos
				},{
					where:{
						email: usuarioData.email
					}
				})
				.then(user => {
						return {
							success: true,
							trace: "El usuario " + usuarioData.email + " ha sido editado con exito.",
							errors: []
						}
					})
					.catch(err => {
						return {
							success: false,
							trace: "",
							errors: [
								"El usuario no ha podido ser modificado."
							]
						}
				})
			}else{
				return Promise.reject({
					success: false,
					trace: "",
					errors: [
						"El usuario no existe"
					]
				})
			}
		})
		.catch(err => {
			return {
				success: false,
				trace: "",
				errors: ["Error en la base de datos"]
			}
		})
}

module.exports.editarUsuario = editarUsuario;
