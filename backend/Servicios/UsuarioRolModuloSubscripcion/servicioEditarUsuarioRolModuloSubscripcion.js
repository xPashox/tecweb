const urms = require("../../models/").UsuarioRolModuloSubscripcion

var editarUsuarioRolModuloSubscripcion = async function (urmsData){
	return urms.findOne({
		where:{
			idModulo: urmsData.idModulo,
			idUsuarioRol: urmsData.idUsuarioRol
		}
	})
	.then(urmsResult => {
		if(urmsResult)
			return Promise.reject({errors: ["Ya existe la subscripcion."]})
		return urms.update({
			idModulo: urmsData.idModulo,
			idUsuarioRol: urmsData.idUsuarioRol
		},{
			where:{
				id: urmsData.id
			}
		})
		.then(result => {
			if(result[0] == 0)
				return Promise.reject({errors: ["La subscripcion no existe."]})
			return {
				success: true,
				trace: "La subscripcion ha sido editada con exito",
				errors: []
			}
		})
		.catch(err => {
			return {
				success: false,
				trace: "",
				errors: err.errors!=undefined?err.errors:["No se ha podido editar la subscripcion."]
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

module.exports.editarUsuarioRolModuloSubscripcion = editarUsuarioRolModuloSubscripcion
