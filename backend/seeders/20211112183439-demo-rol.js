'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rol',[{
      nombre: "ADMIN",
      descripcion: "Administrador del Sistema",
    },
    {
      nombre: "ENCARGADO",
      descripcion: "Encargado de Casa de Estudio",
    },
    {
      nombre: "PROFESOR",
      descripcion: "Usuario tipo Profesor",
    },
    {
      nombre: "ESTUDIANTE",
      descripcion: "Usuario tipo Estudiante",
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
