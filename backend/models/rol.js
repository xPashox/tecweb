'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Rol.hasMany(models.UsuarioRol, {foreignKey: 'idRol'});
    }
  };
  Rol.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: DataTypes.TEXT,
    descripcion: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Rol',
  });
  return Rol;
};