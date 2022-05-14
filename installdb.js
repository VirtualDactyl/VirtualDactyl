(async () => {
    const config = require('./config.json');
    const chalk = require('chalk');

    const knex = require('knex')({
        client: 'better-sqlite3',
        connection: {
        filename: __dirname + '/' + config.database
        },
        useNullAsDefault: true,
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
    async function createUserTable() {
        var exists = await knex.schema.hasTable('users');
        if (exists == false) {
            console.log('Creating user table...')
            return knex.schema.createTable('users', function(t) {
                t.increments('ID').primary();
                t.string('username', 100);
                t.string('password', 100);
                t.string('email', 100);
                t.string('role', 100); // user, reseller, staff, moderator, admin or owner
                t.float('coins', 25, 500);
                console.log(chalk.green('Users table created!'));
            });
        } else {
            console.log(chalk.red('Users table already exists! Are you trying to install on a existing instance?'));
        }
    }

    // Create tables
    await createUserTable();

    // Done
    console.log(chalk.green('Installation complete!'));

    // Exit
    process.exit(0);
})();