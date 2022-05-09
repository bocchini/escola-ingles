const database = require('../models');

class TurmaController {
  static async listarTodas (req, res) {
    try {
      const turmas = await database.Turmas.findAll();
      return res.status(200).json(turmas);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };

  static async listarUma(req, res){
    try {
      const { id } = req.params;
      if(isNaN(id)){
        return res.status(400).json({message: 'Erro com o id informado'});
      }
      const turma = await database.Turmas.findOne({
        where:{
          id
        }
      });
      return res.status(200).json(turma);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async criar (req, res) {
    const turma = req.body;
    if(turma.length <= 0){
      return res.status(400).json({message: 'Erro com os parâmetros informados'});
    }
    try{
      const turmaCriada = await database.Turmas.create(turma);
      return res.status(201).json(turmaCriada);
    } catch (err){
      return res.status(500).json(err);
    }
  };

  static async atualizar (req, res){
    const turma = req.body;
    const { id } = req.params;
    if(isNaN(id)){
      return res.status(400).json({message: 'Erro com o id informado'})
    }
    if(turma.length <= 0){
      return res.status(400).json({message: 'Erro com os parâmetros informados'});
    }
    try{
      await database.Turmas.update(turma, {
        where: { id }
      });
      const turmaAtualizada = await database.Turmas.findOne({
        where: {id}
      });
      return res.status(200).json(turmaAtualizada);
    } catch (err){
      return res.status(500).json(err);
    }
  };

  static async deletar (req, res){
    const { id } = req.params;
    try {
      if(isNaN(id)){
        return res.status(400).json({message: 'Erro com o id informado'});
      }
      await database.Turmas.destroy({where:{id}});
      return res.status(200).json({message: "registro excluido com sucesso!"});
    } catch (error) {
      return res.status(500).json(err);
    }
  };
}

module.exports = TurmaController;