'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rol',[{
      nombre: "ADMIN",
      descripcion: "Administrador del Sistema",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: "ENCARGADO",
      descripcion: "Encargado de Casa de Estudio",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: "PROFESOR",
      descripcion: "Usuario tipo Profesor",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: "ESTUDIANTE",
      descripcion: "Usuario tipo Estudiante",
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
