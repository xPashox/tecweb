const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "ModuloSala", deps: [Modulo, Sala, UsuarioRol]
 * createTable() => "UsuarioRolModulo", deps: [UsuarioRol, Modulo]
 * createTable() => "UsuarioRolModuloSalaReserva", deps: [UsuarioRol, ModuloSala]
 * changeColumn(idUsuarioRol) => "UsuarioRolCarrera"
 *
 */

const info = {
  revision: 2,
  name: "Create - URM, MS, URMSR",
  created: "2021-10-22T20:24:25.842Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "ModuloSala",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
        },
        idModulo: {
          type: Sequelize.INTEGER,
          field: "idModulo",
          references: { model: "Modulo", key: "id" },
        },
        idSala: {
          type: Sequelize.INTEGER,
          field: "idSala",
          references: { model: "Sala", key: "id" },
        },
        idUsuarioRolModulo: {
          type: Sequelize.INTEGER,
          field: "idUsuarioRolModulo",
          references: { model: "UsuarioRol", key: "id" },
        },
        nombre: { type: Sequelize.TEXT, field: "nombre" },
        descripcion: { type: Sequelize.TEXT, field: "descripcion" },
        cantidadAlumnos: { type: Sequelize.INTEGER, field: "cantidadAlumnos" },
        codigo: { type: Sequelize.TEXT, field: "codigo", unique: true },
        fechaInicio: { type: Sequelize.DATE, field: "fechaInicio" },
        fechaTermino: { type: Sequelize.DATE, field: "fechaTermino" },
        estado: { type: Sequelize.INTEGER, field: "estado" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "UsuarioRolModulo",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
        },
        idUsuarioRol: {
          type: Sequelize.INTEGER,
          field: "idUsuarioRol",
          references: { model: "UsuarioRol", key: "id" },
        },
        idModulo: {
          type: Sequelize.INTEGER,
          field: "idModulo",
          references: { model: "Modulo", key: "id" },
        },
        estado: { type: Sequelize.INTEGER, field: "estado" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "UsuarioRolModuloSalaReserva",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
        },
        idUsuarioRol: {
          type: Sequelize.INTEGER,
          field: "idUsuarioRol",
          references: { model: "UsuarioRol", key: "id" },
        },
        idModuloSala: {
          type: Sequelize.INTEGER,
          field: "idModuloSala",
          references: { model: "ModuloSala", key: "id" },
        },
        fecha: { type: Sequelize.DATE, field: "fecha" },
        estado: { type: Sequelize.INTEGER, field: "estado" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "UsuarioRolCarrera",
      "idUsuarioRol",
      {
        type: Sequelize.INTEGER,
        field: "idUsuarioRol",
        references: { model: "UsuarioRol", key: "id" },
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["ModuloSala", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["UsuarioRolModulo", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["UsuarioRolModuloSalaReserva", { transaction }],
  },
  {
    fn: "changeColumn",
    params: [
      "UsuarioRolCarrera",
      "idUsuarioRol",
      {
        type: Sequelize.INTEGER,
        field: "idUsuarioRol",
        references: { model: "Usuario", key: "id" },
      },
      { transaction },
    ],
  },
];

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (useTransaction) return queryInterface.sequelize.transaction(run);
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, migrationCommands),
  down: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, rollbackCommands),
  info,
};
