//const { request } = require("express");
const UsuarioModel = require("../Modelos/UsuariosModel");

module.exports = class UsuariosController {
    static async getAll(request, response) {
        const result = await UsuarioModel.find({});
        response.status(200).json(result);
    };

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
            console.log(Id + 'Jesus');
            const Usuario = await UsuarioModel.findOne({ id: Id });
            console.log(Usuario + 'David');
            if (Usuario != null) {
                response.status(200).json(Usuario);
            } else {
                response.status(400).json();
            }
        } catch (error) {
            response.status(400).json({ menssage: error.menssage });
        }
    };

    static async DeleteUser(resquest, response) {
        try {
            const Id = request.params.Id;
            await UsuarioModel.deleteOne({ Id: Id });
            response.status(200).json();
        } catch (error) {
            response.status(400).json({ menssage: error.mensagge })
        }
    };


    static async InsertUser(request, response) {
        try {
            const data = request.body;
            //Validaciones de los datos o se podria realizar en el Fron para
            //quitar acciones al back
            const Usuario = await UsuarioModel.create(data);
            response.status(200).json(Usuario);
        } catch (error) {
            response.status(400).json({ mensagge: error.mensagge });
        }
    };

    static async UpdateUser(request, response) {
        try {
            const Id = request.params.Id;
            const data = request.body;
            const Usuario = await UsuarioModel.updateOne({ Id: Id }, data);
            response.status(200).json(Usuario);
        } catch (error) {
            response.status(400).json({ mensagge: error.mensagge });
        }
    };
}