const CasaEstudio = require("../../models").CasaEstudio

let fetchCasaEstudio

var obtenerCasaEstudio = async function (cEstudioData){
    fetchSalaData = cEstudioData
    return CasaEstudio.findOne({
        where: {
            id: cEstudioData.id,
            //estado: 1
        }
    }).then(result => {
        if (result == null){
            throw {
                success: false,
                trace: "",
                errors: ["La Casa de estudios no existe"]
            }
        }
        const casaestudio = {
            id: result.id,
            nombre: result.nombre,
            direccion: result.direccion
        }
        return {
            success: true,
            trace: casaestudio,
            errors: []
        }
    }).catch(err => {
        return err
    })
}

var listarCasasEstudio = async function (){
    return CasaEstudio.findAll({
        where: {
            estado: 1
        }
    }).then(arCasaEstudio => {
        if(!arCasaEstudio){
            throw {
                success: false,
                trace: "",
                errors: ["No se encontraron Casas Estudio"]
            }
        }
        var listCasasEstudio = []
        for (var i = 0; i < arCasaEstudio.length; i++){
            const casaestudio = {
                id: arCasaEstudio[i].id,
                nombre: arCasaEstudio[i].nombre,
                direccion: arCasaEstudio[i].direccion
            }
            listCasasEstudio.push(casaestudio)
        }
        return {
            success: true,
            trace: listCasasEstudio,
            errors: []
        }
    }).catch(err => {
        return err
    })
}

module.exports.obtenerCasaEstudio = obtenerCasaEstudio
module.exports.listarCasasEstudio = listarCasasEstudio