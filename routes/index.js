// Import packages
const express = require('express');
const fs = require("fs");

// Setup express
const app = express.Router();

// Loop through files
fs.readdirSync(__dirname).forEach(function(file) {
    // If the file is 'index.js' continue to next file
    if (file == "index.js") return;

    // split file name
    var FileName = file.split('.');

    // get the medhod and name
    const method = FileName[0];
    const name = FileName[1];

    // Import the route
    const route = require('./' + file);

    // Make a endpoint of the route
    app.get(`/${route.name}`, async (req, res) => {
        try {
            // try to execute the code
            route.run(req, res);
        } catch(e) {
            res.status(500)
            res.send('error' + String(e));
        }         
    })
});

module.exports = app;