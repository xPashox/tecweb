'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsuarioRolModuloSubscripcion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UsuarioRolModuloSubscripcion.init({
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
    modelName: 'UsuarioRolModuloSubscripcion',
  });
  return UsuarioRolModuloSubscripcion;
};