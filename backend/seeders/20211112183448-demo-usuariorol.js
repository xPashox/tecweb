'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UsuarioRol',[{
      idUsuario: 1,
      idRol: 1,
      estado: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idUsuario: 2,
      idRol: 2,
      estado: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idUsuario: 3,
      idRol: 3,
      estado: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idUsuario: 4,
      idRol: 4,
      estado: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
