const Modulo = require("../../models/").Modulo

var editarModulo = async function (moduloData){
	return Modulo.findOne({
		where:{
			idCasaEstudio: moduloData.idCasaEstudio,
			idCarrera: moduloData.idCarrera,
			nombre: moduloData.nombre
		}
	})
	.then(modulo => {
		if(modulo && modulo.id != moduloData.id){
			return Promise.reject({
				success: false,
				trace: "",
				errors: ["Ya existe un modulo con este nombre dentro de esta carrera en esta casa de estudio."]
			})
		}
		return Modulo.update({
			idCasaEstudio: moduloData.idCasaEstudio,
			idCarrera: moduloData.idCarrera,
			nombre: moduloData.nombre
		},{
			where:{
				id: moduloData.id
			}
		})
		.then(modulo1 => {
			if(modulo1[0] == 0){
				return Promise.reject({
					success: false,
					trace: "",
					errors: ["El modulo buscado no existe."]
				})
			}
			return {
				success: true,
				trace: "El modulo fue editado correctamente.",
				errors: []
			}
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
				errors: ["No se pudo editar el modulo."]
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

module.exports.editarModulo = editarModulo;