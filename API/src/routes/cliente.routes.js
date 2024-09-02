const router = require('express-promise-router')();
const {Criar, Listar, Editar, Deletar} = require('../controller/cliente.controller');

router.post('/cliente/', Criar);
router.get('/cliente/', Listar);
router.put('/cliente/:id', Editar);
router.delete('/cliente/:id', Deletar);

module.exports = router;