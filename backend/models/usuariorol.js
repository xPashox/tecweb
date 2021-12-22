'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsuarioRol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UsuarioRol.belongsTo(models.Usuario, {as:"Rol", foreignKey: 'idUsuario'});
      UsuarioRol.belongsTo(models.Rol, {foreignKey: 'idRol'});
    }
  };
  UsuarioRol.init({
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
    idRol: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Rol',
        key: 'id'
      }
    },
    estado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UsuarioRol',
  });
  return UsuarioRol;
};