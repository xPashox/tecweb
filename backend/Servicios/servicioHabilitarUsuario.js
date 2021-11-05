const Usuario = require("../models/").Usuario


var habilitarUsuario = async function (email){
		return Usuario.findOne({
			where: {
				email: email
			}
		})
		.then(user => {
			if(user != null){
				return Usuario.update({
					estado: 1
				},{
				where:{
					email: email
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
			//console.log(err)
			return 0 // ERROR GENERICO -> catch Exception ex
		})
}

module.exports.habilitarUsuario = habilitarUsuario;