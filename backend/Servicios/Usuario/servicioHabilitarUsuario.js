const Usuario = require("../../models/").Usuario


var habilitarUsuario = async function (id){
		return Usuario.findOne({
			where: {
				id: id
			}
		})
		.then(user => {
			if(user != null){
				return Usuario.update({
					estado: 1
				},{
				where:{
					id: id
				}
				})
				.then(user => {
						return {
							success: true,
							trace: "El usuario ha sido habilitado con exito.",
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
				errors: err.errors!==undefined?err.errors:["Error en la base de datos"]
			}
		})
}

module.exports.habilitarUsuario = habilitarUsuario;