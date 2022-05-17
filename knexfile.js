// Update with your config settings.

const config = require('./config.json');

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'better-sqlite3',
    connection: {
      filename: __dirname + '/' + config.database
    },
    migrations: {
      tableName: 'migrations'
    },
    seeds: {
      directory: __dirname + '/seeds'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'better-sqlite3',
    connection: {
      filename: __dirname + '/' + config.database
    },
    migrations: {
      tableName: 'migrations'
    },
    seeds: {
      directory: __dirname + '/seeds'
    },
    useNullAsDefault: true
  }

};
