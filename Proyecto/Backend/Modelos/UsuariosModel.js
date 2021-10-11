const mongoose = require("mongoose");

const UsuariosSchema = mongoose.Schema({
    id: String,
    nombre: String,
    apellido: String,
    telefono: String,
    direccion: String,
    password: String
});


module.exports = mongoose.model("Usuarios", UsuariosSchema);