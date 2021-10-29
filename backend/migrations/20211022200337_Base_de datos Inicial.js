const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "CasaEstudio", deps: []
 * createTable() => "Rol", deps: []
 * createTable() => "Usuario", deps: []
 * createTable() => "Carrera", deps: [CasaEstudio]
 * createTable() => "Modulo", deps: [CasaEstudio, Carrera]
 * createTable() => "Sala", deps: [CasaEstudio]
 * createTable() => "UsuarioRol", deps: [Usuario, Rol]
 * createTable() => "UsuarioRolCarrera", deps: [Usuario, Carrera]
 * createTable() => "UsuarioRolModuloSubscripcion", deps: [UsuarioRol, Modulo]
 * createTable() => "UsuarioSesion", deps: [Usuario]
 *
 */

const info = {
  revision: 1,
  name: "Base de datos Inicial",
  created: "2021-10-22T20:03:37.910Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "CasaEstudio",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
        },
        nombre: { type: Sequelize.TEXT, field: "nombre" },
        direccion: { type: Sequelize.TEXT, field: "direccion" },
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
      "Rol",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
        },
        nombre: { type: Sequelize.TEXT, field: "nombre" },
        descripcion: { type: Sequelize.TEXT, field: "descripcion" },
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
      "Usuario",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
        },
        email: { type: Sequelize.TEXT, field: "email", unique: true },
        nombre: { type: Sequelize.TEXT, field: "nombre" },
        apellidos: { type: Sequelize.TEXT, field: "apellidos" },
        clave: { type: Sequelize.TEXT, field: "clave" },
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
      "Carrera",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
        },
        idCasaEstudio: {
          type: Sequelize.INTEGER,
          field: "idCasaEstudio",
          references: { model: "CasaEstudio", key: "id" },
        },
        nombre: { type: Sequelize.TEXT, field: "nombre" },
        emailContacto: { type: Sequelize.TEXT, field: "emailContacto" },
        telefono: { type: Sequelize.TEXT, field: "telefono" },
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
      "Modulo",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
        },
        idCasaEstudio: {
          type: Sequelize.INTEGER,
          field: "idCasaEstudio",
          references: { model: "CasaEstudio", key: "id" },
        },
        idCarrera: {
          type: Sequelize.INTEGER,
          field: "idCarrera",
          references: { model: "Carrera", key: "id" },
        },
        nombre: { type: Sequelize.TEXT, field: "nombre" },
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
      "Sala",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
        },
        idCasaEstudio: {
          type: Sequelize.INTEGER,
          field: "idCasaEstudio",
          references: { model: "CasaEstudio", key: "id" },
        },
        nombre: { type: Sequelize.TEXT, field: "nombre" },
        aforo: { type: Sequelize.INTEGER, field: "aforo" },
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
      "UsuarioRol",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
        },
        idUsuario: {
          type: Sequelize.INTEGER,
          field: "idUsuario",
          references: { model: "Usuario", key: "id" },
        },
        idRol: {
          type: Sequelize.INTEGER,
          field: "idRol",
          references: { model: "Rol", key: "id" },
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
      "UsuarioRolCarrera",
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
          references: { model: "Usuario", key: "id" },
        },
        idCarrera: {
          type: Sequelize.INTEGER,
          field: "idCarrera",
          references: { model: "Carrera", key: "id" },
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
      "UsuarioRolModuloSubscripcion",
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
      "UsuarioSesion",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
        },
        idUsuario: {
          type: Sequelize.INTEGER,
          field: "idUsuario",
          references: { model: "Usuario", key: "id" },
        },
        token: { type: Sequelize.TEXT, field: "token" },
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
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["Carrera", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["CasaEstudio", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Modulo", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Rol", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Sala", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Usuario", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["UsuarioRol", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["UsuarioRolCarrera", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["UsuarioRolModuloSubscripcion", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["UsuarioSesion", { transaction }],
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
