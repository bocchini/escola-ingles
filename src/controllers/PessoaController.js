const database = require('../models');

class PessoaController {
  static async pegaTodas(req, res) {
    try {
      const pessoas = await database.Pessoas.findAll();
      return res.status(200).json(pessoas);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async pegaUma(req, res){
    try{
      const { id } = req.params;

      if(isNaN(id)){
        return res.status(400).json({message: 'Erro com o id informado'});
      }
      const pessoa = await database.Pessoas.findOne({
        where: {
          id
        }
      });
      return res.status(200).json(pessoa);
    } catch(err){
      return res.status(500).json(err.message);
    }
  }

  static async criar(req, res){
    try{
      const pessoa = req.body;
      if(pessoa.length <= 0){
        return res.status(400).json({message: 'Erro com os parâmetros informados'});
      }
      const pessoaCriada = await database.Pessoas.create(pessoa);
      return res.status(201).json(pessoaCriada);
    }catch(err){
      return res.status(500).json(err);
    }
  }

  static async atualizar(req, res){
    try {
      const pessoa = req.body;
      const { id } = req.params;
      if(isNaN(id)){
        return res.status(400).json({message: 'Erro com o id informado'});
      }
      await database.Pessoas.update(pessoa, { 
        where:{ 
          id
        }
      });
      const pessoaAtualizada = await database.Pessoas.findOne({
        where: {
          id
        }
      });
      return res.status(200).json(pessoaAtualizada);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  static async deletar(req,res){
    const { id } = req.params;
    try{
      if(isNaN(id)){
        return res.status(400).json({message: 'Erro com o id informado'});
      }
      await database.Pessoas.destroy({where:{id}});
      return res.status(200).json({message: "registro excluido com sucesso!"});
    }
    catch (err) {
      return res.status(500).json(err);
    }
  }

  static async pegarUmaMatricula (req, res){
    const { estudanteId, matriculaId } = req.params;
    try {
      const matricula = await database.Matriculas.findOne({
        where: {
          id: matriculaId,
          estudante_id: estudanteId
        }
      });
      return res.status(200).json(matricula);
    } catch (err) {
      return res.status(500).json(err);
    }
  };

  static async criarMatricula (req, res){
    const { estudanteId } = req.params;
    const novaMatricula = {...req.body, estudante_id: Number(estudanteId)};
    try {
      const matriculaCriada = await database.Matriculas.create(novaMatricula);
      return res.status(201).json(matriculaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };
  
}
module.exports = PessoaController;
