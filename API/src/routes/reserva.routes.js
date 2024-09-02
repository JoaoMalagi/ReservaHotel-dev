const router = require('express-promise-router')();
const {Criar, Listar} = require('../controller/reserva.controller');

router.post('/reserva/', Criar);
router.get('/reserva/', Listar);

module.exports = router;