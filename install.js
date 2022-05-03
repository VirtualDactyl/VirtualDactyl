#!/usr/bin/env node

const fs = require('fs');

console.log( "Hello!" );

const args = process.argv;

const action = args[2];
console.log('action: ' + args[2] + '\n')
switch (action) {
    case "newRoute":
        if (!args[3]) return console.error(`\t\tno method given`);
        if (!args[4]) return console.error(`\t\tno route given`);

        if (args[4].startsWith('/')) return console.error(`\t\troute must not start with a /`);

        const method = args[3].toLowerCase();
        const path = args[4];

        var r;
        r = '';

        r += `module.exports = {\n`;
        r += `\tname: "${path}",\n`;
        r += `\trun: async(req, res) => {\n`;
        r += `\t\tres.send('route content');\n`;
        r += `\t}\n`;
        r += `};`;

        fs.writeFileSync(`./routes/${method}.${path}.js`, r);
        console.log(`\t\tRoute ${method.toUpperCase()} /${path} created!`);
        break;
    default:
        console.log('invalid action');
}

console.log('\nbye :(');
process.exit(0);