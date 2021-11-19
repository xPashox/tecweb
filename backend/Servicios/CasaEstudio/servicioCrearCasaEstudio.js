const CasaEstudio = require("../../models").CasaEstudio

let fetchCasaEstudio

var crearCasaEstudio = async function (cEstudioData){
    fetchCasaEstudio = cEstudioData
    return CasaEstudio.findOne({
        where: {
            id: cEstudioData.nombre
        }
    }).then(result => {
        if (result != null){
            throw {
                success: false,
                trace: "",
                errors: ["La Casa de Estudios ya existe"]
            }
        }
        return CasaEstudio.create(fetchCasaEstudio).then(result => {
            if (result == null){
                throw {
                    success: false,
                    trace: "",
                    errors: ["No se pudo crear la Case de Estudios"]
                }
            }
            return {
                success: true,
                trace: "La Casa de Estudios fue creada correctamente",
                errors: []
            }
        }).catch(err => {
            return err
        })
    }).catch(err => {
        return err
    })
}

module.exports.crearCasaEstudio = crearCasaEstudio