/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

  // Create log
  await knex('logs').insert([
    {
      type: 'System',
      logType: 'system.install',
      logdata: 'The panel was installed!'
    }
  ]);

  // Create default admin user
  await knex('users').insert([
    {
      username: 'admin',
      password: 'changeme!',
      email: 'my@ema.il',
      role: 'owner',
      coins: 0,
      'ptero_userID': 1
    }
  ]);

  // Create default link
  await knex('links').insert([
    {
      title: 'Discord',
      description: 'Join our discord!',
      link: 'https://discord.gg/jT5XbjExeD',
      iconclass: 'fa fa-discord'
    }
  ]);

  // Create some default settings
  await knex('links').insert([
    {
      name: 'site.title',
      value: 'VirtualDactyl'
    },
    {
      name: 'site.online',
      value: 'yes'
    }
  ]);

  console.log('default data added!');
};
