const Usuario = require("../../models/").Usuario
const UsuarioRol = require("../../models/").UsuarioRol

var listarUsuarioYRol = async function (){
	return Usuario.findAll({
		include: [{
			model: UsuarioRol,
			required: true,
			attributes: ['idRol'],
			where:{
				idRol: 1
			},
		}],
		attributes:['nombres'],
	})
	.then(result => {
		return {
			success: true,
			trace: result,
			errors: []
		}
	})
	.catch(err => {
		return {
			success: false,
			trace: "",
			errors: ["Problemas"]
		}
	})
}

module.exports.listarUsuarioYRol = listarUsuarioYRol