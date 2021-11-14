const express = require("express")
const jwt = require("jsonwebtoken")
const rutasProtegidas = express.Router()
const _config = require("..")

rutasProtegidas.use((req, res, next) => {

    const bearerLine = req.headers['authorization'];
    console.log(bearerLine)
    if (typeof bearerLine === 'undefined') {
      return res.status(403).json({
          mensaje: 'Token no proveída.'
      });
    }

    const token = (bearerLine.split(' '))[1];

    jwt.verify(token, _config.JWTSecret, (err, decoded) => {
        if (err) {
          return res.status(403).json({ mensaje: 'Token inválida' });
        }
        else {
          req.decoded = decoded;
          //console.log(decoded)
          next();
        }
    });
 });

module.exports = rutasProtegidas

