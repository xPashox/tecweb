'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsuarioRecuperarClave extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UsuarioRecuperarClave.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Usuario',
        key: 'id'
      }
    },
    token:DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'UsuarioRecuperarClave',
  });
  return UsuarioRecuperarClave;
};