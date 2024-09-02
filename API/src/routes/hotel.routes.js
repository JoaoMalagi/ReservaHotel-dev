const router = require('express-promise-router')();
const {Criar, Listar, ListarById} = require('../controller/hotel.controller');

router.post('/hotel/', Criar);
router.get('/hotel/', Listar);
router.get('/hotel/:id', ListarById);

module.exports = router;