'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrera extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Carrera.belongsTo(models.CasaEstudio, {foreignKey:'idCasaEstudio'});
      Carrera.hasMany(models.Sala, {foreignKey:'idCasaEstudio'});
      Carrera.hasMany(models.UsuarioRolCarrera, {foreignKey:'idCarrera'});
    }
  };
  Carrera.init({
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
    nombre: DataTypes.TEXT,
    emailContacto: DataTypes.TEXT,
    telefono: DataTypes.TEXT,
    estado:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carrera',
  });
  return Carrera;
};