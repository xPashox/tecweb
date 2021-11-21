const Carrera = require("../../models/").Carrera

var deshabilitarCarrera = async function (id){
	return Carrera.findOne({
		where:{
			id: id
		}
	})
	.then(carrera => {
		console.log(carrera)
		if(!carrera){
			return Promise.reject({
				success: false,
				trace: "",
				errors: ["La carrera no se encuentra creada."]
			})
		}
		return Carrera.update({
				estado: 0
			},{
			where:{
				id: id
			}
		})
		.then(carrera1 => {
			return {
				success: true,
				trace: "La carrera ha sido deshabilitada exitosamente.",
				errors: []
			}
		})
		.catch(err => {
			return {
				success: false,
				trace: "",
				errors: ["La carrera no ha podido ser deshabilitada"]
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

module.exports.deshabilitarCarrera = deshabilitarCarrera;