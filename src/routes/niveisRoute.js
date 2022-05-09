const { Router } = require('express');
const NivelController = require('../controllers/NivelController');

const router = Router();

router
  .get('/niveis', NivelController.pegarTodas)
  .get('/niveis/:id', NivelController.listarUma)
  .post('/niveis', NivelController.criar)
  .put('/niveis/:id', NivelController.atualizar)
  .delete('/niveis/:id', NivelController.deletar);


module.exports = router;