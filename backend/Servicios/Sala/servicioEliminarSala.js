const Sala = require("../../models").Sala
const CasaEstudio = require("../../models").CasaEstudio

let fetchSalaData

var cambiarEstadoSala = async function (salaData){
    fetchSalaData = salaData
    return CasaEstudio.findOne({
        where: {
            id: salaData.idCasaEstudio
        }
    }).then(result => {
        if (result == null){
            throw {
                success: false,
                trace: "",
                errors: ["Casa de estudios no existe"]
            }
        }
        return Sala.findOne({
            where: {
                id: salaData.id
            }
        }).then(rSala => {
            if (rSala == null){
                throw {
                    success: false,
                    trace: "",
                    errors: ["La sala no existe"]
                }
            }
            return rSala.update(fetchSalaData, {
                where: {
                    id: fetchSalaData.id
                }
            }).then(result => {
                if (result[0] == 0){
                    console.log(result)
                    throw {
                        success: false,
                        trace: "",
                        errors: ["No se pudo cambiar estado a la Sala"]
                    }
                }
                return {
                    success: true,
                    trace: "La Sala cambio su estado correctamente",
                    errors: []
                }
            }
            ).catch(err => {
                return err
            })
        }).catch(err => {
            return err
        })
    }).catch(err => {
        return err
    })
}

module.exports.cambiarEstadoSala = cambiarEstadoSala