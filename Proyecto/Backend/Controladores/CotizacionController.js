const CotizacionModel = require("../Modelos/CotizacionModel");

module.exports = class CotizacionController {

    static async getAllCotizaciones(request, response) {

        try {
            const Cotizacion = await CotizacionModel.find({});
            response.status(200).json(Cotizacion);
        } catch (error) {
            response.status(400).json({ menssage: error.menssage });
        }
    };


    static async getOneCotizacion(request, response) {
        try {
            const Id = request.params.Id;

            const Cotizacion = await CotizacionModel.findOne({ _id: Id });
            if (Cotizacion != null) {
                response.status(200).json(Cotizacion);
            } else {
                response.status(400).json();
            }
        } catch (error) {
            response.status(400).json({ menssage: error.menssage });
        }
    };

    static async DeleteCotizacion(request, response) {
        try {
            const Id = request.params.Id;
            await CotizacionModel.deleteOne({ _id: Id });
            response.status(200).json();
        } catch (error) {
            response.status(400).json({ menssage: error.mensagge })
        }
    };


    static async InsertCotizacion(request, response) {
        try {
            const data = request.body;
            const Cotizacion = await CotizacionModel.create(data);
            response.status(201).json(Cotizacion);
        } catch (error) {
            response.status(400).json({ mensagge: error.mensagge });
        }
    };

    static async UpdateCotizacion(request, response) {
        try {
            const Id = request.params.Id;
            const data = request.body;
            const Cotizacion = await CotizacionModel.updateOne({ _id: Id }, data);
            response.status(200).json(Cotizacion);
        } catch (error) {
            response.status(400).json({ mensagge: error.mensagge });
        }
    };
}