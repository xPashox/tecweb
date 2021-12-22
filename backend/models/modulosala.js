'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ModuloSala extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ModuloSala.belongsTo(models.Modulo, {foreignKey:'idModulo'});
      ModuloSala.belongsTo(models.Sala, {foreignKey:'idSala'});
      ModuloSala.belongsTo(models.UsuarioRolModulo, {foreignKey:'idUsuarioRolModulo'});
      ModuloSala.hasMany(models.UsuarioRolModuloSalaReserva, {foreignKey:'idModuloSala'});
    }
  };
  ModuloSala.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idModulo: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Modulo',
        key: 'id'
      }
    },
    idSala: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Sala',
        key: 'id'
      }
    },
    idUsuarioRolModulo: {
      type: DataTypes.INTEGER,
      references: {
        model: 'UsuarioRol',
        key: 'id'
      }
    },
    nombre: DataTypes.TEXT,
    descripcion: DataTypes.TEXT,
    cantidadAlumnos: DataTypes.INTEGER,
    codigo: {
      type: DataTypes.TEXT,
      unique: true
    },
    fechaInicio: DataTypes.DATE,
    fechaTermino: DataTypes.DATE,
    estado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ModuloSala',
  });
  return ModuloSala;
};