const Usuario = require("../models/").Usuario


var listarUsuarios = async function (){
		return Usuario.findAll({
		})
		.then(data => {
			var listaUsuarios = []
			for(var i = 0; i < data.length; i++){
				const usuario = {
					id: data[i].id,
					email: data[i].email,
					nombres: data[i].nombres,
					apellidos: data[i].apellidos,
					clave: data[i].clave,
					estado: data[i].estado
				}
				listaUsuarios.push(usuario)
			}
			return listaUsuarios
		})
		.catch(err => {
			return 0 // ERROR GENERICO -> catch Exception ex
		})
}

module.exports.listarUsuarios = listarUsuarios;