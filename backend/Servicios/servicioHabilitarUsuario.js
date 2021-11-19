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
						return {
							success: true,
							trace: user,
							errors:[]
						}
					})
					.catch(err => {
						return Promise.reject({
							success: false,
							trace: "",
							errors: [
								"No se ha podido habilitar el usuario."
							]
						})
				})
			}else{
				return {
					success: false,
					trace: "",
					errors: [
						"El usuario no existe."
					]
				}
			}
		})
		.catch(err => {
			//console.log(err)
			return {
				success: false,
				trace: "",
				errors: ["Error en la base de datos"]
			}
		})
}

module.exports.habilitarUsuario = habilitarUsuario;