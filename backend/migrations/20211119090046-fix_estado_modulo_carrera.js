'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Modulo', 'estado', {
          type: Sequelize.DataTypes.INTEGER
        }, { transaction: t }),
        queryInterface.addColumn('Carrera', 'estado', {
          type: Sequelize.DataTypes.INTEGER,
        }, { transaction: t })
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Modulo', 'estado', { transaction: t }),
        queryInterface.removeColumn('Carrera', 'estado', { transaction: t })
      ]);
    });
  }
};
