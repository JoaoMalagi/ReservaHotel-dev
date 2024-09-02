const router = require('express-promise-router')();
const {Criar, Listar, ListarById, Editar, Deletar} = require('../controller/hotel.controller');

router.post('/hotel/', Criar);
router.get('/hotel/', Listar);
router.get('/hotel/:id', ListarById);
router.put('/hotel/:id', Editar);
router.delete('/hotel/:id', Deletar);

module.exports = router;