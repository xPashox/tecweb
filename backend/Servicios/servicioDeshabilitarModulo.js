const Modulo = require("../models/").Modulo

var deshabilitarModulo = async function (id) {
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
			estado: 0
		},{
			where:{
				id: id
			}
		})
		.then(modulo1 => {
			return {
				success: true,
				trace: "El modulo ha sido correctamente deshabilitado.",
				errors: []
			}
		})
		.catch(err => {
			return {
				success: false,
				trace: "",
				errors: ["El modulo no ha podido ser deshabilitado."]
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

module.exports.deshabilitarModulo = deshabilitarModulo;