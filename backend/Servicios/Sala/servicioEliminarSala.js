const Sala = require("../models").Sala
const CasaEstudio = require("../models").CasaEstudio

let fetchSalaData

var deshabilitarSala = async function (salaData){
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
        Sala.findOne({
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
                if (result[0] == 0){ //Revisar retorno de Update
                    console.log(result)
                    throw {
                        success: false,
                        trace: "",
                        errors: ["No se pudo deshabilitar la Sala"]
                    }
                }
                return {
                    success: true,
                    trace: "La Sala fue deshabilitada correctamente",
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

var habilitarSala = async function (salaData){
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
        Sala.findOne({
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
                if (result[0] == 0){ //Revisar retorno de Update
                    console.log(result)
                    throw {
                        success: false,
                        trace: "",
                        errors: ["No se pudo habilitar la Sala"]
                    }
                }
                return {
                    success: true,
                    trace: "La Sala fue habilitada correctamente",
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

module.exports.deshabilitarSala = deshabilitarSala
module.exports.habilitarSala = habilitarSala