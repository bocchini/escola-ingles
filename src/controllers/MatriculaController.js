const database = require('../models');

class MatriculaController {
  static async listarTodas (req, res) {
    try {
      const matriculas = await database.Matriculas.findAll();
      return res.status(200).json(matriculas);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static async listarUma (req, res){
    try {
      const { id } = req.params;
      if(isNaN(id)){
        return res.status(400).json({message: 'Erro com o id informado'});
      }
      const matricula = await database.Matriculas.findOne({
        where:{id}
      })
      return res.status(200).json(matricula);
    } catch (error) {
       return res.status(500).json(err.message);
    }
  };
};

module.exports =  MatriculaController;