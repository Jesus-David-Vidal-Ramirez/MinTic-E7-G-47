///Poder manejar valores del archivo .env
require("dotenv").config();

///Incluimos los valores a requerir 
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//Agregamos el puerto
const port = process.env.PORT;

// Creamos una aplicacion
const app = express();
//Le decimos a la aplicacion que utilizar
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Ruta
app.use('/api', require('./routes/routes'));

// COnexion BD
mongoose.connect(process.env.URI_DB)
    .then(() => console.log("Se ha establecido la conexion con la base de datos..."))
    .catch(err => console.error(err));

//Escuchando las solicitudes por el puerto 'port'
app.listen(port, () => {

    console.log(`Servidor escuchando a traves de http://127.0.0.1:${port}`);

    ///127.0.0.1
});