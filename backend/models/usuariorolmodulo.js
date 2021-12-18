'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsuarioRolModulo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UsuarioRolModulo.belongsTo(models.UsuarioRol, {foreignKey:'idUsuarioRol'});
      UsuarioRolModulo.belongsTo(models.Modulo, {foreignKey:'idModulo'});
    }
  };
  UsuarioRolModulo.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idUsuarioRol: {
      type: DataTypes.INTEGER,
      references: {
        model: 'UsuarioRol',
        key: 'id'
      }
    },
    idModulo: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Modulo',
        key: 'id'
      }
    },
    estado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UsuarioRolModulo',
  });
  return UsuarioRolModulo;
};