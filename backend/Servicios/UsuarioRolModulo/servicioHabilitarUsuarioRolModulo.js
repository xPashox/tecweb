const UsuarioRolModulo = require("../../models/").UsuarioRolModulo

var habilitarUsuarioRolModulo = async function (id){
	return UsuarioRolModulo.update({
		estado: 1
	},{
		where:{
			id: id
		}
	})
	.then(result => {
		if(result[0]==0){
			return Promise.reject({
				errors: ["La relacion indicada por el id no existe."]
			})
		}
		return {
			success: true,
			trace: "La relacion fue habilitada correctamente.",
			errors:[]
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: err.errors!==undefined?err.errors:["No se ha podido conectar a la base de datos."]
		}
	})
}

module.exports.habilitarUsuarioRolModulo = habilitarUsuarioRolModulo;