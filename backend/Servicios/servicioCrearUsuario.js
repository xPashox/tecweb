const Usuario = require("../models/").Usuario
const UsuarioRol = require("../models/").UsuarioRol


var crearUsuario = async function (usuarioData){
		return Usuario.findOne({
			where: {
				email: usuarioData.email
			}
		})
		.then(user => {
			if(user == null){
				return Usuario.create(usuarioData)
				.then(user1 => {
					if (!user1){
						return {
							success: false,
							trace: "",
							errors:[
								"Ha ocurrido un error al momento de crear el usuario"
							]
						}
					}
					else{
						const userRolData = {
							idUsuario: user1.id,
							idRol: usuarioData.rol,
							estado: 1
						}
						return UsuarioRol.create(userRolData).then(result => {
							//console.log(result)
							return {
								success: true,
								trace: "Usuario " + usuarioData.email + " y rol creado con exito",
								errors:[]
							}
						}).catch(err => {
							return {
								success: true,
								trace: "Usuario " + usuarioData.email + " ha sido creado",
								errors:[
								 	"El rol del usuario no ha sido creado."
								]
							}
						})
					}
				}).catch(err => {
					return {
						success: false,
						trace: "",
						errors:[
							"No se ha podido crear el usuario."
						]
					}
				})
			}else{
				return {
					success: false,
					trace: "",
					errors:[
						"El usuario ya existe"
					]
				}
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

module.exports.crearUsuario = crearUsuario;
