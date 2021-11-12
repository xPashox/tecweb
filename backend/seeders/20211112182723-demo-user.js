'use strict';
var bcrypt = require("bcrypt")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuarios',[{
      email: "admin@gmail.com",
      nombres: "Admin",
      apellidos: "Admin",
      clave: await bcrypt.hash("123", 10),
      estado: 1,
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
