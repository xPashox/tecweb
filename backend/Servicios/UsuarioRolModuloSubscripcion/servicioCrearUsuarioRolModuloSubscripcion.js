const urms = require("../../models/").UsuarioRolModuloSubscripcion

var crearUsuarioRolModuloSubscripcion = async function (urmsData){
	return urms.findOne({
		where:{
			idModulo: urmsData.idModulo,
			idUsuarioRol: urmsData.idUsuarioRol
		}
	})
	.then(urmsResult => {
		if(urmsResult)
			return Promise.reject({errors: ["Ya existe la subscripcion."]})
		return urms.create(urmsData)
		.then(result => {
			return {
				success: true,
				trace: "La subscripcion ha sido creada con exito",
				errors: []
			}
		})
		.catch(err => {
			return {
				success: false,
				trace: "",
				errors: ["No se ha podido crear la subscripcion."]
			}
		})
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!=undefined?err.errors:["No se ha podido conectar a la base de datos."]
		}
	})
}

module.exports.crearUsuarioRolModuloSubscripcion = crearUsuarioRolModuloSubscripcion