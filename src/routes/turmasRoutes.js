const { Router } = require('express');

const TurmaController = require('../controllers/TurmaController');

const router = Router();

router 
  .get('/turmas', TurmaController.listarTodas)
  .get('/turmas/:id', TurmaController.listarUma)
  .post('/turmas', TurmaController.criar)
  .put('/turmas/:id', TurmaController.atualizar)
  .delete('/turmas/:id', TurmaController.deletar);

module.exports = router;