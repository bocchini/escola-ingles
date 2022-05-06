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

  static async cria(req, res){
    try{
      const pessoa = req.body;
      if(pessoa.length < 0){
        return res.status(400).json({message: 'Erro com os parâmetros informados'})
      }
      const pessoaCriada = await database.Pessoas.create(pessoa);
      return res.status(201).json(pessoaCriada);
    }catch(err){
      return res.status(500).json(err);
    }
  }
}
module.exports = PessoaController;