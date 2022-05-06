const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router
  .get('/pessoas', PessoaController.pegaTodas)
  .get('/pessoas/:id', PessoaController.pegaUma)
  .post('/pessoas', PessoaController.cria)
  .put('/pessoas/:id', PessoaController.atualizar)
  .delete('/pessoas/:id', PessoaController.deletar);

module.exports = router;
