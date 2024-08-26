const router = require('express-promise-router')();
const {Criar, Listar} = require('../controller/hotel.controller');

router.post('/hotel/', Criar);
router.get('/hotel/', Listar);

module.exports = router;