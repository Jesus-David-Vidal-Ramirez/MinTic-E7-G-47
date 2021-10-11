const mongoose = require("mongoose");

const ArtiuclosSchema = mongoose.Schema({
    Tipo: String,
    Marca: String,
    Modelo: String,
    Id: String
});


module.exports = mongoose.model("Articulos", ArtiuclosSchema);