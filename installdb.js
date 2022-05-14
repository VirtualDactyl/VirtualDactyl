const config = require('./config.json');

const knex = require('knex')({
    client: 'better-sqlite3',
    connection: {
      filename: __dirname + '/' + config.database
    },
    migrations: {
        tableName: 'migrations'
    },
    log: {
        warn(message) {
            console.log('db - warn', message)
        },
        error(message) {
            console.log('db - error', message)
        },
        deprecate(message) {
            console.log('db - deprecate', message)
        },
        debug(message) {
            console.log('db - debug', message)
        },
    }
});

// Functions
function createUserTable() {
    knex.schema.hasTable('users').then(function(exists) {
        if (!exists) {
            console.log('creating user table...')
            return knex.schema.createTable('users', function(t) {
                t.increments('ID').primary();
                t.string('username', 100);
                t.string('password', 100);
                t.string('email', 100);
                t.string('role', 100); // user, reseller, staff, moderator, admin or owner
                t.float('coins', 25, 500);
                console.log('user table created!');
            });
        }
    });
}

// Create tables
createUserTable();