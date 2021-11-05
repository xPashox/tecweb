const Usuario = require("../models/").Usuario


var crearUsuario = async function (usuarioData){
		return Usuario.findOne({
			where: {
				email: usuarioData.email
			}
		})
		.then(user => {
			if(user == null){
				return Usuario.create(usuarioData)
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

module.exports.crearUsuario = crearUsuario;
