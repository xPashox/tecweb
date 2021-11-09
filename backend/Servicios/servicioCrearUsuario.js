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
				.then(user => {
					if (!user){
						return 2
					}
					else{
						const userRolData = {
							idUsuario: user.id,
							idRol: usuarioData.rol,
							estado: 1
						}
						UsuarioRol.create(userRolData).then(result => {
							return 1 // Se pudo crear Usuario y UsuarioRol
						}).catch(err => {
							return 4 // ERROR - No se puede crear UsuarioRol
						})
					}
				}).catch(err => {
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
