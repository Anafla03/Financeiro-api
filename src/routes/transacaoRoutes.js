const express = require('express');
const routes = express.Router();
const TransacaoController = require('../controllers/TransacaoController');

routes.get('/', TransacaoController.listar);
routes.post('/', TransacaoController.criar);
routes.delete('/:id', TransacaoController.deletar);

module.exports = routes;
