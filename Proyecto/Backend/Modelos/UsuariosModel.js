const mongoose = require("mongoose");

const UsuariosSchema = mongoose.Schema({
    Id: String,
    Nombre: String,
    Apellido: String,
    Telefono: String,
    Correo: String,
    Password: String
});


module.exports = mongoose.model("Usuarios", UsuariosSchema);