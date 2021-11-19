const CasaEstudio = require("../../models").CasaEstudio

let fetchCasaEstudio

var editarCasaEstudio = async function (cEstudioData){
    fetchCasaEstudio = cEstudioData
    return CasaEstudio.findOne({
        where: {
            id: cEstudioData.id
        }
    }).then(result => {
        if (result == null){
            throw {
                success: false,
                trace: "",
                errors: ["La Casa de Estudios no existe"]
            }
        }
        const preCasaEstudio = {
            nombre: fetchCasaEstudio.nombre == ""?result.nombre:fetchCasaEstudio.nombre,
            direccion: fetchCasaEstudio.direccion == ""?result.direccion:fetchCasaEstudio.direccion
        }
        return CasaEstudio.update(preCasaEstudio, {
            where: {
                id: fetchCasaEstudio.id
            }
        }).then(result => {
            if (result[0] == 0){
                throw {
                    success: false,
                    trace: "",
                    errors: ["No se pudo actualizar la Casa de Estudios"]
                }
            }
            return {
                success: true,
                trace: "La Casa de Estudio fue actualizada correctamente",
                errors: []
            }
        }).catch(err => {
            return err
        })
    }).catch(err => {
        return err
    })
}

module.exports.editarCasaEstudio = editarCasaEstudio