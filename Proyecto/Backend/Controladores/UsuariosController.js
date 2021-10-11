//const { request } = require("express");
const UsuarioModel = require("../Modelos/UsuariosModel");

module.exports = class UsuariosController {

    static async getAllUser(request, response) {

        try {
            const Usuarios = await UsuarioModel.find({});
            response.status(200).json(Usuarios);
        } catch (error) {
            response.status(400).json({ menssage: error.menssage });
        }
    };


    static async getOneUser(request, response) {
        try {
            const Id = request.params.Id;

            const Usuario = await UsuarioModel.findOne({ _id: Id });
            if (Usuario != null) {
                response.status(200).json(Usuario);
            } else {
                response.status(400).json();
            }
        } catch (error) {
            response.status(400).json({ menssage: error.menssage });
        }
    };

    static async DeleteUser(request, response) {
        try {
            const Id = request.params.Id;
            await UsuarioModel.deleteOne({ _id: Id });
            response.status(200).json();
        } catch (error) {
            response.status(400).json({ menssage: error.mensagge })
        }
    };


    static async InsertUser(request, response) {
        try {
            const data = request.body;
            const Usuario = await UsuarioModel.create(data);
            console.log(data);
            response.status(201).json(Usuario);
        } catch (error) {
            response.status(400).json({ mensagge: error.mensagge });
        }
    };

    static async UpdateUser(request, response) {
        try {
            const Id = request.params.Id;
            const data = request.body;
            const Usuario = await UsuarioModel.updateOne({ _id: Id }, data);
            response.status(200).json(Usuario);
        } catch (error) {
            response.status(400).json({ mensagge: error.mensagge });
        }
    };
}