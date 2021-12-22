const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * addColumn(estado) => "Carrera"
 * addColumn(estado) => "Modulo"
 *
 */

const info = {
  revision: 4,
  name: "fix add estado to modulo carrera",
  created: "2021-11-19T16:00:42.962Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "addColumn",
    params: [
      "Carrera",
      "estado",
      { type: Sequelize.INTEGER, field: "estado" },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "Modulo",
      "estado",
      { type: Sequelize.INTEGER, field: "estado" },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["Carrera", "estado", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["Modulo", "estado", { transaction }],
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
