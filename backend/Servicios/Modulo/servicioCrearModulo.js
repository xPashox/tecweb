const Modulo = require("../../models/").Modulo

var crearModulo = async function (moduloData){
	return Modulo.findOne({
		where:{
			idCasaEstudio: moduloData.idCasaEstudio,
			idCarrera: moduloData.idCarrera,
			nombre: moduloData.nombre
		}
	})
	.then(modulo => {
		if(modulo){
			return Promise.reject({
				success: false,
				trace: "",
				errors: ["El modulo ya se encuentra creado dentro esta carrera y casa de estudio."]
			})
		}
		return Modulo.create(moduloData)
		.then(modulo1 => {
			return {
				success: true,
				trace: "El modulo fue creado con exito.",
				errors: []
			}
		})
		.catch(err => {
			return {
				success: false,
				trace: "",
				errors: ["No se pudo crear el modulo."]
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

module.exports.crearModulo = crearModulo;