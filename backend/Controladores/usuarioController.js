const Usuario = require("../models/").Usuario

exports.crearUsuario = (req, res) => {
	const usuarioData = {
		email: req.body.email,
		nombres: req.body.nombres,
		apellidos: req.body.apellidos,
		clave: req.body.clave,
		estado: 1
	}
	Usuario.findOne({
		where: {
			email: req.body.email
		}
	})
	.then(user => {
		if(user == null){
			Usuario.create(usuarioData)
			.then(user => {
					res.json({status: user.email + ' registered'}) // TODO definir retorno de valor.
				})
				.catch(err => {
					res.send('error' + err) // ERROR - No se puede crear usuario
			})
		}else{
			res.json({error: "El usuario ya existe"}) // El usuario ya existe
		}
	})
	.catch(err => {
		res.send('error1: ' + err) // ERROR GENERICO -> catch Exception ex
	})
}