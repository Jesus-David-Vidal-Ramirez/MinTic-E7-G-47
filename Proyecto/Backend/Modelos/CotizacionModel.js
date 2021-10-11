const mongoose = require("mongoose");

const CotizacionSchema = mongoose.Schema({
    id: String,
    nombre: String,
    apellido: String,
    telefono: String,
    direccion: String,
    articulos: Array
});


module.exports = mongoose.model("Cotizacion", CotizacionSchema);