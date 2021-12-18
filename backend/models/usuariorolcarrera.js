'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsuarioRolCarrera extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UsuarioRolCarrera.belongsTo(models.UsuarioRol, {foreignKey:'idUsuarioRol'});
      UsuarioRolCarrera.belongsTo(models.Carrera, {foreignKey:'idCarrera'});
    }
  };
  UsuarioRolCarrera.init({
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
    idCarrera: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Carrera',
        key: 'id'
      }
    },
    estado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UsuarioRolCarrera',
  });
  return UsuarioRolCarrera;
};