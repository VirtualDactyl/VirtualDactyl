// Import packages
const express = require("express");
const chalk = require("chalk");

// Load config
const Config_API = require('./config/api.json');

// Setup express
const app = express();

// Pretty json
app.set("json spaces", 2);

// Error handeler
app.use(require('./handelers/error'));

// Logging
app.use((req, res, next) => {
  console.log(`${chalk.green(req.ip)} ${chalk.blue(req.method)} ${chalk.red(req.path)}`);
  next();
});

// Routing
app.use(require("./routes"));

// Home page
app.get("/", (req, res) => {
  res.send("Home page");
});

// Start listening on port 5000
app.listen(Config_API.port, () => {
  console.log(chalk.yellow("\tAPI listening at port " + Config_API.port) + '\n');
});
