const ArticulosModel = require("../Modelos/ArticulosModel");

module.exports = class ArticulosController {

    static async getAllArticulos(request, response) {

        try {
            const Articulos = await ArticulosModel.find({});
            response.status(200).json(Articulos);
        } catch (error) {
            response.status(400).json({ menssage: error.menssage });
        }
    };


    static async getOneArticulo(request, response) {
        try {
            const Id = request.params.Id;

            const Articulo = await ArticulosModel.findOne({ _id: Id });
            if (Articulo != null) {
                response.status(200).json(Articulo);
            } else {
                response.status(400).json();
            }
        } catch (error) {
            response.status(400).json({ menssage: error.menssage });
        }
    };

    static async DeleteArticulo(request, response) {
        try {
            const Id = request.params.Id;
            await ArticulosModel.deleteOne({ _id: Id });
            response.status(200).json();
        } catch (error) {
            response.status(400).json({ menssage: error.mensagge })
        }
    };


    static async InsertArticulo(request, response) {
        try {
            const data = request.body;
            const Articulo = await ArticulosModel.create(data);
            response.status(201).json(Articulo);
        } catch (error) {
            response.status(400).json({ mensagge: error.mensagge });
        }
    };

    static async UpdateArticulo(request, response) {
        try {
            const Id = request.params.Id;
            const data = request.body;
            const Articulo = await ArticulosModel.updateOne({ _id: Id }, data);
            response.status(200).json(Articulo);
        } catch (error) {
            response.status(400).json({ mensagge: error.mensagge });
        }
    };
}