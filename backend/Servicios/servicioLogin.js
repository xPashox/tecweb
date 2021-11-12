const Usuario = require("../models").Usuario
const UsuarioRol = require ("../models").UsuarioRol
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const _config = require("..")

let fetcheduser

var iniciarSesion = async function (usuarioData){
    return Usuario.findOne({
        where: {
            email: usuarioData.email
        }
    }).then(user => {
        if (!user){
            return Promise.reject({
                success: false,
                trace: "No se encontro al usuario."
            })
        }
        fetcheduser = user
        return bcrypt.compare(usuarioData.clave, user.clave)
    }).then(result => {
        if (!result){
            return Promise.reject({
                success: false,
                trace: "Clave incorrecta."
            })
        }
        return UsuarioRol.findOne({
            where: {
                idUsuario: fetcheduser.id
            }
        })
    }).then(result => {
        if (!result){
            return Promise.reject({
                success: false,
                trace: "Usuario no autorizado."
            })
        }
        /* Crear Token */
        const token = jwt.sign(
            {
                userID: fetcheduser.id,
                email: fetcheduser.email,
                rol: result.idRol
            },
            _config.JWTSecret,
            {
                expiresIn: "1d"
            }
        )
        return{
            success: true,
            trace: token
        }
    }).catch(err => {
        return {
            success: false,
            trace: err.trace
        }
    })
}

module.exports.iniciarSesion = iniciarSesion;