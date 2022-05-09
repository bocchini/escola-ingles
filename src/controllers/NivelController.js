const database = require('../models');

class NivelController {
  static async pegarTodas(req, res) {
    try {
      const niveis = await database.Niveis.findAll();
      return res.status(200).json(niveis);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async listarUma(req, res) {
    try {
      const { id } = req.params;
      if (isNaN(id)) {
        return res.status(400).json({ message: 'Erro com o tipo do id' });
      }
      const nivel = await database.Niveis.findOne({
        where: { id },
      });
      return res.status(200).json(nivel);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async criar(req, res) {
    try {
      const nivel = req.body;
      if (nivel.length <= 0) {
        return res
          .status(400)
          .json({ message: 'Erro com os parâmetros informados' });
      }
      const nivelCriada = await database.Niveis.create(nivel);
      return res.status(201).json(nivelCriada);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  static async atualizar(req, res) {
    const nivel = req.body;
    const { id } = req.params;
    try {
      if (isNaN(id)) {
        return res.status(400).json({ message: 'Erro com o tipo do id' });
      }
      if (nivel.length <= 0) {
        return res
          .status(400)
          .json({ message: 'Erro com os parâmetros informados' });
      }
      await database.Niveis.update(nivel, {
        where: { id },
      });
      const niveisAtualizadas = await database.Niveis.findOne({
        where:{id}
      });
      return res.status(200).json(niveisAtualizadas);
    } catch (error) {
      return res.status(500).json(err);
    }
  }

  static async deletar(req, res) {
    try {
      const { id } = req.params;
      if (isNaN(id)) {
        return res.status(400).json({ message: 'Erro com o tipo do id' });
      }
      await database.Niveis.destroy({ where: { id } });
      return res
        .status(200)
        .json({ message: 'registro excluido com sucesso!' });
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

module.exports = NivelController;
