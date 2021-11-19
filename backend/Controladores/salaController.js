const Sala = require("../models").Sala
var _serviceCrearSala = require("../Servicios/Sala").crearSala
var _serviceEditarSala = require("../Servicios/Sala").editarSala
var _serviceEliminarSala = require("../Servicios/Sala/servicioEliminarSala")
var _serviceListarSala = require("../Servicios/Sala/servicioListarSala")

exports.crearSala = async (req, res) => {
    if (req.body.idCasaEstudio == null || req.body.nombre == "" ||
    req.body.aforo == null){
        res.json({
            success: false,
            trace: "",
            errors: ["Modelo no valido"]
        })
    }

    const salaData = {
        idCasaEstudio: req.body.idCasaEstudio,
        nombre: req.body.nombre,
        aforo: req.body.aforo,
        estado: 1
    }

    res.json(await _serviceCrearSala.crearSala(salaData))
}

exports.editarSala = async (req, res) => {
    if (req.body.id = null || req.body.idCasaEstudio == null || 
        req.body.nombre == "" || req.body.aforo == null){
        res.json({
            success: false,
            trace: "",
            errors: ["Modelo no valido"]
        })
    }

    const salaData = {
        id: req.body.id,
        idCasaEstudio: req.body.idCasaEstudio,
        nombre: req.body.nombre,
        aforo: req.body.aforo
    }

    res.json(await _serviceEditarSala.editarSala(salaData))
}

exports.deshabilitarSala = async (req, res) => {
    if (req.body.id = null || req.body.idCasaEstudio == null){
        res.json({
            success: false,
            trace: "",
            errors: ["Modelo no valido"]
        })
    }

    const salaData = {
        id: req.body.id,
        idCasaEstudio: req.body.idCasaEstudio,
        estado: 0
    }

    res.json(await _serviceEliminarSala.deshabilitarSala(salaData))
}

exports.habilitarSala = async (req, res) => {
    if (req.body.id = null || req.body.idCasaEstudio == null){
        res.json({
            success: false,
            trace: "",
            errors: ["Modelo no valido"]
        })
    }

    const salaData = {
        id: req.body.id,
        idCasaEstudio: req.body.idCasaEstudio,
        estado: 1
    }

    res.json(await _serviceEliminarSala.habilitarSala(salaData))
}

exports.obtenerSala = async (req, res) => {
    if (req.body.id = null || req.body.idCasaEstudio == null){
        res.json({
            success: false,
            trace: "",
            errors: ["Modelo no valido"]
        })
    }

    const salaData = {
        id: req.body.id,
        idCasaEstudio: req.body.idCasaEstudio,
        estado: 1
    }

    res.json(await _serviceListarSala.obtenerSala(salaData))
}

exports.listarSalas = async (req, res) => {
    if (req.body.id = null || req.body.idCasaEstudio == null){
        res.json({
            success: false,
            trace: "",
            errors: ["Modelo no valido"]
        })
    }

    const salaData = {
        id: req.body.id,
        idCasaEstudio: req.body.idCasaEstudio,
        estado: 1
    }

    res.json(await _serviceListarSala.listarSalas(salaData))
}