'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsuarioRolModuloSalaReserva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UsuarioRolModuloSalaReserva.init({
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
    idModuloSala: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ModuloSala',
        key: 'id'
      }
    },
    fecha: DataTypes.DATE,
    estado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UsuarioRolModuloSalaReserva',
  });
  return UsuarioRolModuloSalaReserva;
};