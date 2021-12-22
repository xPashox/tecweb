const Usuario = require("../../models/").Usuario
const UsuarioRol = require("../../models/").UsuarioRol

var listarUsuarioPorRol = async function (rol){
	return Usuario.findAll({
		include: [{
			model: UsuarioRol,
			required: true,
			where:{
				idRol: rol
			},
		}],
		attributes:['nombres'],
	})
	.then(result => {
		return {
			success: true,
			trace: result,
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: ["Error en la conexion a la base de datos."]
		}
	})
}

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
			return {
				success: true,
				trace: listaUsuarios,
				errors: []
			}
		})
		.catch(err => {
			return {
				success: false,
				trace: "",
				errors: ["Error en base de datos"]
			}
		})
}

module.exports.listarUsuario = listarUsuario;
module.exports.listarUsuarios = listarUsuarios;
module.exports.listarUsuarioPorRol = listarUsuarioPorRol;