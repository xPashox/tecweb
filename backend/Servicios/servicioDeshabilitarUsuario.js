const Usuario = require("../models/").Usuario


var deshabilitarUsuario = async function (email){
		return Usuario.findOne({
			where: {
				email: email
			}
		})
		.then(user => {
			if(user != null){
				return Usuario.update({
					estado: 0
				},{
				where:{
					email: email
				}
				})
				.then(user => {
						return {
							success: true,
							trace: "El usuario " + email + " ha sido deshabilitado con exito.",
							errors: []
						}
					})
					.catch(err => {
						return Promise.reject({
							success: false,
							trace: "",
							errors: [
								"No se ha podido deshabilitar el usuario."
							]
						})
				})
			}else{
				return Promise.reject({
					success: false,
					trace: "",
					errors: [
						"El usuario no existe."
					]
				})
			}
		})
		.catch(err => {
			//console.log(err)
			return Promise.reject({
				success: false,
				trace: "",
				errors: ["Error en la base de datos"]
			})
		})
}

module.exports.deshabilitarUsuario = deshabilitarUsuario;
