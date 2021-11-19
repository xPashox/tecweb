const Sala = require("../models").Sala
const CasaEstudio = require("../models").CasaEstudio

let fetchSalaData

var crearSala = async function (salaData){
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
                nombre: salaData.nombre}
        }).then(result => {
            if (result != null){
                throw {
                    success: false,
                    trace: "",
                    errors: ["Ya existe una sala con ese nombre"]
                }
            }
            Sala.create(fetchSalaData).then(result => {
                if (result == null){
                    throw {
                        success: false,
                        trace: "",
                        errors: ["No se pudo crear la sala en la Base de Datos"]
                    }
                }
                return {
                    success: true,
                    trace: "La sala fue creada correctamente",
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

module.exports.crearSala = crearSala