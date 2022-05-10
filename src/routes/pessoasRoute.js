const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router
  .get('/pessoas', PessoaController.pegarTodas)
  .get('/pessoas/:id', PessoaController.pegarUma)
  .post('/pessoas', PessoaController.criar)
  .put('/pessoas/:id', PessoaController.atualizar)
  .delete('/pessoas/:id', PessoaController.deletar)
  .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegarUmaMatricula)
  .post('/pessoas/:estudanteId/matricula', PessoaController.criarMatricula)
  .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizarMatricula)
  .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletarMatricula);

module.exports = router;
