const express = require('express');
const routes = express.Router();
const UsuarioController = require('../controllers/UsuarioController');

routes.get('/', UsuarioController.listar);
routes.post('/', UsuarioController.criar);
routes.delete('/:id', UsuarioController.deletar);

module.exports = routes;
