const router = require('express-promise-router')();
const {Criar, Listar} = require('../controller/cliente.controller');

router.post('/cliente/', Criar);
router.get('/cliente/', Listar);

module.exports = router;