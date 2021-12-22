'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Modulo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Modulo.belongsTo(models.CasaEstudio, {foreignKey:'idCasaEstudio'});
      Modulo.belongsTo(models.Carrera, {foreignKey:'idCarrera'});
      Modulo.hasMany(models.ModuloSala, {foreignKey:'idModulo'});
      Modulo.hasMany(models.UsuarioRolModulo, {foreignKey:'idModulo'});
    }
  };
  Modulo.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idCasaEstudio: {
      type: DataTypes.INTEGER,
      references: {
        model: 'CasaEstudio',
        key: 'id'
      }
    },
    idCarrera: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Carrera',
        key: 'id'
      }
    },
    nombre: DataTypes.TEXT,
    estado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Modulo',
  });
  return Modulo;
};