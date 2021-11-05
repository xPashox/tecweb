const Usuario = require("../models/").Usuario


var listarUsuario = async function (email){
		return Usuario.findOne({
			where: {
				email: email
			}
		})
		.then(user => {
			if(user != null){
				return {
					id: user.id,
					email: user.email,
					nombres: user.nombres,
					apellidos: user.apellidos,
					clave: user.clave,
					estado: user.estado
				}
			}
		})
		.catch(err => {
			return 0 // ERROR GENERICO -> catch Exception ex
		})
}

module.exports.listarUsuario = listarUsuario;
