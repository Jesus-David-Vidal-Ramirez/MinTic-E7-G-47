const express = require("express");

const UsuariosController = require("../Controladores/UsuariosController");
const ArticulosController = require("../Controladores/ArticulosController");
const CotizacionController = require("../Controladores/CotizacionController");

const router = express.Router();
//Rutas User

router.get('/Usuarios', UsuariosController.getAllUser);
router.get('/Usuarios/:Id', UsuariosController.getOneUser);
router.post('/Usuarios/', UsuariosController.InsertUser);
router.put('/Usuarios/:Id', UsuariosController.UpdateUser);
router.delete('/Usuarios/:Id', UsuariosController.DeleteUser);

//Rutas Articulos
router.get('/Articulos', ArticulosController.getAllArticulos);
router.get('/Articulo/:Id', ArticulosController.getOneArticulo);
router.post('/Articulo/', ArticulosController.InsertArticulo);
router.put('/Articulo/:Id', ArticulosController.UpdateArticulo);
router.delete('/Articulo/:Id', ArticulosController.DeleteArticulo);

//Rutas Cotizaciones
router.get('/Cotizacion', CotizacionController.getAllCotizaciones);
router.get('/Cotizacion/:Id', CotizacionController.getOneCotizacion);
router.post('/Cotizacion/', CotizacionController.InsertCotizacion);
router.put('/Cotizacion/:Id', CotizacionController.UpdateCotizacion);
router.delete('/Cotizacion/:Id', CotizacionController.DeleteCotizacion);

module.exports = router;