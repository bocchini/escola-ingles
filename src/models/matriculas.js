'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matriculas extends Model {
    static associate(models) {
      Matriculas.belongsTo(models.Pessoas, {
        foreignKey: 'id'
      });
      Matriculas.belongsTo(models.Turmas, {
        foreignKey: 'id'
      });
    }
  }
  Matriculas.init(
    {
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Matriculas',
    },
  );
  return Matriculas;
};
