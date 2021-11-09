const Usuario = require("../models").Usuario
const UsuarioRol = require ("../models").UsuarioRol

let fetcheduser

var iniciarSesion = async function (usuarioData){
    return Usuario.findOne({
        where: {
            email: usuarioData.email
        }
    }).then(user => {
        if (!user){
            return {
                success: false,
                trace: "No se encontro al usuario."
            }
        }
        fetcheduser = user
        return bcryp.compare(usuarioData.clave, user.clave)
    }).then(result => {
        if (!result){
            return {
                success: false,
                trace: "Clave incorrecta."
            }
        }
        return UsuarioRol.findOne({
            where: {
                idUsuario: fetcheduser.id
            }
        })
    }).then(result => {
        if (!result){
            return {
                success: false,
                trace: "Usuario no autorizado."
            }
        }
        /* Crear Token */
        const token = jwt.sign(
            {
                userID: fetcheduser.id,
                email: fetcheduser.email,
                rol: result.idRol
            },
            process.env.JWT_SECRET_KEY, //INSTALAR DOTENV
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
            trace: err
        }
    })
}