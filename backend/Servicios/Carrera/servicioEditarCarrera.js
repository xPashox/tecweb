const Carrera = require("../../models/").Carrera

var editarCarrera = async function (carreraData){
	return Carrera.findOne({
		where:{
			idCasaEstudio: carreraData.idCasaEstudio,
			nombre: carreraData.nombre
		}
	})
	.then(carrera => {
		if(carrera != null && carrera.id != carreraData.id){
			return Promise.reject({
				success: false,
				trace: "",
				errors: ["Ya existe una carrera con ese nombre en la misma casa de estudio."]
			})
		}
		return Carrera.update({
			idCasaEstudio: carreraData.idCasaEstudio,
			nombre: carreraData.nombre,
			emailContacto: carreraData.emailContacto,
			telefono: carreraData.telefono
		},{
			where:{
				id: carreraData.id
			}
		})
		.then(carrera1 => {
			if(carrera1[0] == 0){
				return Promise.reject({
					success: false,
					trace: "",
					errors: ["No existe la carrera."]
				})
			}
			return {
				success: true,
				trace: "La carrera fue editada exitosamente.",
				errors: []
			}
		})
		.catch(err => {
			if(err.errors !== undefined){
				return ({
					success: false,
					trace: "",
					errors: err.errors
				})
			}
			return {
				success: false,
				trace: "",
				errors: ["No se ha podido editar la carrera."]
			}
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
		return {
			success: false,
			trace: "",
			errors: ["No se ha podido establecer conexión a la base de datos."]
		}
	})
}

module.exports.editarCarrera = editarCarrera;