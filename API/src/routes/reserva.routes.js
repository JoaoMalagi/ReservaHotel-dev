const router = require('express-promise-router')();
const {Criar, Listar, Editar, Deletar} = require('../controller/reserva.controller');

router.post('/reserva/', Criar);
router.get('/reserva/', Listar);
router.put('/reserva/:id', Editar);
router.delete('/reserva/:id', Deletar);

module.exports = router;