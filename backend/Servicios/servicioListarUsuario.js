const Usuario = require("../models/").Usuario


var listarUsuario = async function (email){
		return Usuario.findOne({
			where: {
				email: email
			}
		})
		.then(user => {
			if(user != null){
				var userData = {
					id: user.id,
					email: user.email,
					nombres: user.nombres,
					apellidos: user.apellidos,
					estado: user.estado
				}
				return {
					success: true,
					trace: userData,
					errors: []
				}
			}
			else{
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

module.exports.listarUsuario = listarUsuario;
