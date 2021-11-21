const Carrera = require("../../models/").Carrera

var crearCarrera = async function (carreraData){
	return Carrera.findOne({
		where:{
			idCasaEstudio: carreraData.idCasaEstudio,
			nombre: carreraData.nombre
		}
	})
	.then(carrera => {
		if(carrera != null){
			return Promise.reject({
				success: false,
				trace: "",
				errors: ["La carrera ya se encuentra inscrita"]
			})
		}
		return Carrera.create(carreraData)
		.then(carrera1 => {
			return {
				success: true,
				trace: "La carrera fue creada exitosamente.",
				errors: []
			}
		})
		.catch(err => {
			return ({
				success: false,
				trace: "",
				errors: ["No se ha podido crear la carrera."]
			})
		})
	})
	.catch(err => {
		if(err.errors !== undefined){
			return ({
				success: false,
				trace: "",
				errors: err.errors
			})
		}
		return ({
			success: false,
			trace: "",
			errors: ["No se ha podido establecer conexión a la base de datos."]
		})
	})
}

module.exports.crearCarrera = crearCarrera;