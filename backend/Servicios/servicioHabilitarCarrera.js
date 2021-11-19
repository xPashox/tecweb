const Carrera = require("../models/").Carrera

var habilitarCarrera = async function (id){
	return Carrera.findOne({
		where:{
			id: id
		}
	})
	.then(carrera => {
		if(!carrera){
			return Promise.reject({
				success: false,
				trace: "",
				errors: ["La carrera no se encuentra creada."]
			})
		}
		return Carrera.update({
				estado: 1
			},{
			where:{
				id: id
			}
		})
		.then(carrera1 => {
			return {
				success: true,
				trace: "La carrera ha sido habilitada exitosamente.",
				errors: []
			}
		})
		.catch(err => {
			return {
				success: false,
				trace: "",
				errors: ["La carrera no ha podido ser habilitada"]
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

module.exports.habilitarCarrera = habilitarCarrera;