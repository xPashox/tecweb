const ModuloSala = require("../../models/").ModuloSala

var editarModuloSala = async function (moduloSalaData){
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
		return ModuloSala.update({
			idSala: moduloSalaData.idSala,
			idModulo: moduloSalaData.idModulo,
			idUsuarioRolModulo: moduloSalaData.idUsuarioRolModulo,
			nombre: moduloSalaData.nombre,
			descripcion: moduloSalaData.descripcion,
			cantidadAlumnos: moduloSalaData.cantidadAlumnos,
			fechaInicio: moduloSalaData.fechaInicio,
			fechaTermino: moduloSalaData.fechaTermino
		},{
			where:{
				id: moduloSalaData.id
			}
		})
		.then(result => {
			if(result[0] == 0){
				return Promise.reject({
					errors: ["El modulo indicado no existe."]
				})
			}
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
				errors: err.errors!==undefined?err.errors:["No se ha podido crear la relacion."]
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

module.exports.editarModuloSala = editarModuloSala;