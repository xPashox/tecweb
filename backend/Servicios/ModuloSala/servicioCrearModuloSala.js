const ModuloSala = require("../../models/").ModuloSala

var crearModuloSala = async function (moduloSalaData){
	return ModuloSala.findOne({
		where:{
			idSala: moduloSalaData.idSala,
			idModulo: moduloSalaData.idModulo
		}
	})
	.then(moduloSala => {
		if(moduloSala){
			return Promise.reject({
				success: false,
				trace: "",
				errors: ["Ya existe esta relacion entre modulo y sala."]
			})
		}
		return ModuloSala.create(moduloSalaData)
		.then(result => {
			return {
				success: true,
				trace: "La relacion se ha creado exitosamente.",
				errors: []
			}
		})
		.catch(err => {
			return {
				success: false,
				trace: "",
				errors: ["No se ha podido crear la relacion."]
			}
		})
	})
	.catch(err => {
		return {
			success:false,
			trace: "",
			errors: err.errors!==undefined?err.errors:["No se ha podido conectar con la base de datos."]
		}
	})
}

module.exports.crearModuloSala = crearModuloSala;