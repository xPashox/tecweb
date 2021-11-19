const Sala = require("../models").Sala
const CasaEstudio = require("../models").CasaEstudio

let fetchSalaData

var obtenerSala = async function (salaData){
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
                id: salaData.id,
                estado: 1
            }
        }).then(rSala => {
            if (rSala == null){
                throw {
                    success: false,
                    trace: "",
                    errors: ["La sala no existe"]
                }
            }
            const sala = {
                id: rSala.id,
                idCasaEstudio: rSala.idCasaEstudio,
                nombre: rSala.nombre,
                aforo: rSala.aforo
            }
            return {
                success: true,
                trace: sala,
                errors:[]
            } 
        }).catch(err => {
            return err
        })
    }).catch(err => {
        return err
    })
}

var listarSalas = async function (salaData){
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
        Sala.findAll({
            where: {
                idCasaEstudio: salaData.idCasaEstudio,
                estado: 1
            }
        }).then(arSala => {
            if(!arSala){
                throw {
                    success: false,
                    trace: "",
                    errors: ["No se encontraron Salas en la Casa de Estudios"]
                }
            }
            var listSalas = []
            for (var i = 0; i < arSala.length; i++){
                const sala = {
                    id: arSala[i].id,
                    idCasaEstudio: arSala[i].idCasaEstudio,
                    nombre: arSala[i].nombre,
                    aforo: arSala[i].aforo    
                }
                listSalas.push(sala)
            }
            return {
                success: true,
                trace: listSalas,
                errors: []
            }
        }).catch(err => {
            return err
        })
    }).catch(err => {
        return err
    })
}

module.exports.obtenerSala = obtenerSala
module.exports.listarSalas = listarSalas