const CasaEstudio = require("../models").CasaEstudio
var _serviceCrearCasaEstudio = require("../Servicios/CasaEstudio/servicioCrearCasaEstudio")
var _serviceEditarCasaEstudio = require("../Servicios/CasaEstudio/servicioEditarCasaEstudio")
var _serviceCambiarEstadoCasaEstudio = require("../Servicios/CasaEstudio/servicioEliminarCasaEstudio")
var _serviceListarCasaEstudio = require("../Servicios/CasaEstudio/servicioListarCasaEstudio")

exports.crearCasaEstudio = async (req, res) => {
    if (req.body.nombre == "" || req.body.direccion == ""){
        res.json({
            success: false,
            trace: "",
            errors: ["Modelo no valido"]
        })
    }

    const cEstudioData = {
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        estado: 1
    }

    res.json(await _serviceCrearCasaEstudio.crearCasaEstudio(cEstudioData))
}

exports.editarCasaEstudio = async (req, res) => {
    if (req.body.id == null || (req.body.nombre == "" && 
    req.body.direccion == "")){
        res.json({
            success: false,
            trace: "",
            errors: ["Modelo no valido"]
        })
    }

    const cEstudioData = {
        id: req.body.id,
        nombre: req.body.nombre,
        direccion: req.body.direccion
    }

    res.json(await _serviceEditarCasaEstudio.editarCasaEstudio(cEstudioData))
}

exports.deshabilitarCasaEstudio = async (req, res) => {
    if (req.body.id == null){
        res.json({
            success: false,
            trace: "",
            errors: ["Modelo no valido"]
        })
    }

    const cEstudioData = {
        id: req.body.id,
        estado: 0
    }

    res.json(await _serviceCambiarEstadoCasaEstudio.estadoCasaEstudio(cEstudioData))
}

exports.habilitarCasaEstudio = async (req, res) => {
    if (req.body.id == null){
        res.json({
            success: false,
            trace: "",
            errors: ["Modelo no valido"]
        })
    }

    const cEstudioData = {
        id: req.body.id,
        estado: 1
    }

    res.json(await _serviceCambiarEstadoCasaEstudio.estadoCasaEstudio(cEstudioData))
}

exports.obtenerCasaEstudio = async (req, res) => {
    if (req.body.id == null){
        res.json({
            success: false,
            trace: "",
            errors: ["Modelo no valido"]
        })
    }

    const cEstudioData = {
        id: req.body.id
    }

    res.json(await _serviceListarCasaEstudio.obtenerCasaEstudio(cEstudioData))
}

exports.listarCasasEstudio = async (req, res) => {
    res.json(await _serviceListarCasaEstudio.listarCasasEstudio())
}