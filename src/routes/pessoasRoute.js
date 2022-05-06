const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router
  .get('/pessoas', PessoaController.pegaTodas)
  .get('/pessoas/:id', PessoaController.pegaUma)
  .post('/pessoas', PessoaController.cria);

module.exports = router;
