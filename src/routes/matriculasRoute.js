const { Router } = require('express');
const MatriculaController = require('../controllers/MatriculaController');

const router = Router();

router
.get('/matriculas', MatriculaController.listarTodas)
.get('/matriculas/:id', MatriculaController.listarUma);

module.exports = router;