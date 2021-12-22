'use strict';
var bcrypt = require("bcrypt")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuario',[{
      email: "admin@gmail.com",
      nombres: "Admin",
      apellidos: "Admin",
      clave: await bcrypt.hash("e10adc3949ba59abbe56e057f20f883e", 10),
      estado: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: "encargado@gmail.com",
      nombres: "Encargado",
      apellidos: "Encargado",
      clave: await bcrypt.hash("e10adc3949ba59abbe56e057f20f883e", 10),
      estado: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: "profesor@gmail.com",
      nombres: "Profesor",
      apellidos: "Profesor",
      clave: await bcrypt.hash("e10adc3949ba59abbe56e057f20f883e", 10),
      estado: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: "estudiante@gmail.com",
      nombres: "Estudiante",
      apellidos: "Estudiante",
      clave: await bcrypt.hash("e10adc3949ba59abbe56e057f20f883e", 10),
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
