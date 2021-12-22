const _config = require("../../../");
const Usuario = require("../../../models").Usuario
const UsuarioRecuperarClave = require("../../../models").UsuarioRecuperarClave
const LogMessage = require("../../../Logs/LogMessage")
const sendgrid = require('@sendgrid/mail');
const jwt = require("jsonwebtoken")
const util = require("util")

let fetchuser
let fetchclave
let fetchtoken
let _token
let decToken
let Email_

var solicitarCambioClave = async function (email){
    Email_ = email
    return Usuario.findOne({
        where: {
            email: email
        }
    }).then(user => {
        if (!user){
            throw {
                success: false,
                trace: "",
                errors: ["No se encontro el correo indicado."]
            }
        }
        fetchuser = user
        /* Crear Token */
        const token = jwt.sign(
            {
                userID: user.id,
                email: user.email
            },
            _config.JWTSecret,
            {
                expiresIn: 3600
            }
        )
        if (!token){
            throw {
                success: false,
                trace: "",
                errors: ["No se pudo crear el Token."]
            }
        }
        _token = token
        return UsuarioRecuperarClave.findOne({
            where: {
                idUsuario: fetchuser.id
            }
        }).then(result => {
            const dataRecuperarClave = {
                idUsuario: fetchuser.id,
                token: _token
            }
            if (!result){
                return UsuarioRecuperarClave.create(dataRecuperarClave).then(data => {
                    if (!data){
                        throw {
                            success: false,
                            trace: "",
                            errors: ["No se pudo almacenar el Token en la Base de Datos."]
                        }
                    }
                    var tokenUrl = "baseUrl" + token
                    sendgrid.setApiKey(_config.SendgridKey)
                    const msg = {
                        to: Email_,
                        from: _config.SendgridEmail,
                        subject: "Recuperación de Contraseña",
                        text: util.format(LogMessage.LOG_RECUPERAR_CLAVE, fetchuser.nombres, tokenUrl)
                    }
                    return sendgrid.send(msg).then(resp => {
                        if (!resp){
                            throw {
                                success: false,
                                trace: "",
                                errors: ["No se pudo enviar el correo de recuperación."]
                            }
                        }
                        return {
                            success: true,
                            trace: "El correo de recuperación fue enviado correctamente.",
                            errors: []
                        }
                    }).catch(err => {
                        return err
                    })
                }).catch(err => {
                    return err
                })
            }
            return UsuarioRecuperarClave.update(dataRecuperarClave, {
                where: {
                    idUsuario: fetchuser.id
                }
            }).then(result => {
                if (result[0] == 0){
                    throw {
                        success: false,
                        trace: "",
                        errors: ["No se pudo actualizar el Token en la Base de Datos."]
                    }
                }
                var tokenUrl = "baseUrl" + token
                sendgrid.setApiKey(_config.SendgridKey)
                const msg = {
                    to: Email_,
                    from: _config.SendgridEmail,
                    subject: "Recuperación de Contraseña",
                    text: util.format(LogMessage.LOG_RECUPERAR_CLAVE, fetchuser.nombres, tokenUrl)
                }
                return sendgrid.send(msg).then(resp => {
                    if (!resp){
                        throw {
                            success: false,
                            trace: "",
                            errors: ["No se pudo enviar el correo de recuperación."]
                        }
                    }
                    return {
                        success: true,
                        trace: "El correo de recuperación fue enviado correctamente.",
                        errors: []
                    }
                }).catch(err => {
                    return err
                })
            }).catch(err => {
                return err
            })
        }).catch(err => {
            return err
        })
    }).catch(err => {
        return err
    })
}

var generarCambioClave = async function (userData){
    /* Decodificando el Token */
    jwt.verify(userData.token, _config.JWTSecret, (err, decoded) => {
        if (err){
            return {
                success: false,
                trace: "",
                errors: [err]
            }
        }
        else{
            decToken = decoded
        }
    })
    fetchtoken = userData.token
    fetchclave = userData.clave
    return UsuarioRecuperarClave.findOne({
        where: {
            idUsuario: decToken.userID
        }
    }).then(userRecuperar => {
        if (!userRecuperar){
            throw {
                success: false,
                trace: "",
                errors: ["No se encontró el Token del usuario."]
            }
        }
        if (userRecuperar.token != fetchtoken){
            throw {
                success: false,
                trace: "",
                errors: ["No se encontró el Token o ya fue utilizado."]
            }
        }
        const preUser = {
            clave: fetchclave
        }
        return Usuario.update(preUser, {
            where: {
                id: decToken.userID
            }
        }).then(result => {
            if (result[0] == 0){
                throw {
                    success: false,
                    trace: "",
                    errors: ["No se pudo actualizar la contraseña."]
                }
            }
            const preToken = {
                token: null
            }
            return UsuarioRecuperarClave.update(preToken, {
                where: {
                    idUsuario: decToken.userID
                }
            }).then(result => {
                if (result[0] == 0){
                    throw {
                        success: false,
                        trace: "",
                        errors: ["La contraseña fue actualizada pero no se pudo eliminar el Token."]
                    }
                }
                return {
                    success: true,
                    trace: "La contraseña fue actualizada correctamente.",
                    errors: []
                }
            }).catch(err => {
                return err
            })
        }).catch(err => {
            return err
        })
    }).catch(err => {
        return err
    })
}

module.exports.solicitarCambioClave = solicitarCambioClave
module.exports.generarCambioClave = generarCambioClave