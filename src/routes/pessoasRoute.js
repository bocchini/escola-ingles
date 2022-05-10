const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router
  .get('/pessoas', PessoaController.pegaTodas)
  .get('/pessoas/:id', PessoaController.pegaUma)
  .post('/pessoas', PessoaController.criar)
  .put('/pessoas/:id', PessoaController.atualizar)
  .delete('/pessoas/:id', PessoaController.deletar)
  .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegarUmaMatricula)
  .post('/pessoas/:estudanteId/matricula', PessoaController.criarMatricula);

module.exports = router;
