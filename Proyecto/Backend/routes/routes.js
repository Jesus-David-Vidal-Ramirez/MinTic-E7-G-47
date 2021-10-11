const express = require("express");

const UsuariosController = require("../Controladores/UsuariosController");

const router = express.Router();
//Rutas User

router.get('/Usuarios', UsuariosController.getAllUser);
router.get('/Usuarios/:Id', UsuariosController.getOneUser);
router.post('/Usuarios/', UsuariosController.InsertUser);
router.put('/Usuarios/:Id', UsuariosController.UpdateUser);
router.delete('/Usuarios/:Id', UsuariosController.DeleteUser);

module.exports = router;