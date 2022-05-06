// Import packages
const express = require("express");
const chalk = require("chalk");
const fs = require('fs');

// Load config
const config = require('./config.json');

// Load pages
const pages = require('./pages.json');

// Setup express
const app = express();

// Pretty json
app.set("json spaces", 2);

// Error handeler
app.use(require('./handelers/error'));

// Logging
app.use((req, res, next) => {
  if (req.path == '/favicon.ico') return next();

  console.log(`${chalk.green(req.ip)} ${chalk.blue(req.method)} ${chalk.red(req.path)}`);
  next();
});

// Routing
app.use(require("./routes"));

// EJS
app.set('view engine', 'ejs');

// Assets
app.use('/assets', express.static(__dirname + '/assets'));

// Load routes
Object.keys(pages).forEach(key => {
  app.get(key, (req, res) => {
    if (fs.existsSync('./views/' + key + '.ejs')) {
      res.render(
        pages[key][0],
        {
          req,
          res,
          app
        }
      );
    } else {
      res.render('404');
    }
  });
})

// 404 route
app.all('*', (req, res) => {
  res.render(
    '404'
  );
});

// Start listening on port 5000
app.listen(config.port, () => {
  console.log(chalk.yellow("\tAPI listening at port " + config.port) + '\n');
});
