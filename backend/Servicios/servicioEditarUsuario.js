const Usuario = require("../models/").Usuario


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
					apellidos: usuarioData.apellidos,
					clave: usuarioData.clave
				},{
					where:{
						email: usuarioData.email
					}
				})
				.then(user => {
						return 1// DONE - finalizado exitosamente
					})
					.catch(err => {
						return 2// ERROR - No se puede crear usuario
				})
			}else{
				return 3// ERROR - No se puede crear usuario // El usuario ya existe
			}
		})
		.catch(err => {
			return 0 // ERROR GENERICO -> catch Exception ex
		})
}

module.exports.editarUsuario = editarUsuario;
