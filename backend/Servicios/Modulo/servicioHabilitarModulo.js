const Modulo = require("../../models/").Modulo

var habilitarModulo = async function (id) {
	return Modulo.findOne({
		where:{
			id: id
		}
	})
	.then(modulo => {
		if(!modulo){
			return Promise.reject({
				success: false,
				trace: "",
				errors: ["No se encuentra el modulo solicitado."]
			})
		}
		return Modulo.update({
			estado: 1
		},{
			where:{
				id: id
			}
		})
		.then(modulo1 => {
			return {
				success: true,
				trace: "El modulo ha sido correctamente habilitado.",
				errors: []
			}
		})
		.catch(err => {
			return {
				success: false,
				trace: "",
				errors: ["El modulo no ha podido ser habilitado."]
			}
		})
	})
	.catch(err => {
		if(err.errors !== undefined){
			return {
				success: false,
				trace: "",
				errors: err.errors
			}
		}
		return {
			success: false,
			trace: "",
			errors: ["No se pudo conectar a la base de datos."]
		}
	})
}

module.exports.habilitarModulo = habilitarModulo;