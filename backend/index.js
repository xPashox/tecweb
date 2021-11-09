/* Variables Ambiente */
require('dotenv').config()
module.exports = {
	JWTSecret: process.env.JWT_SECRET
}
//Archivo servidor
const express = require('express');
const cors = require('cors')
const bodyParser = require("body-parser")
//Crear servidor
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/defaultapi', (req, res) => {
	res.send('Hola Mundo')
})

app.listen(4000, () => {
	console.log('El servidor esta corriendo perfectamente')
})

var Usuarios = require("./Rutas/usuarioRutas")

app.use("/usuario", Usuarios)

//Codigo para documentacion Swagger
var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//app.use('/api/v1', router);

