// Import packages
const express = require('express');
const fs = require("fs");

// Setup express
const app = express.Router();

// Loop through files
fs.readdirSync(__dirname).forEach(function(file) {
    // If the file is 'index.js' continue to next file
    if (file == "index.js") return;

    // Import the route
    const route = require('./' + file);
    // Make a endpoint of the route
    if (route.method == 'GET') {
        app.get(`/api/${route.name}`, async (req, res) => {
            try {
                // try to execute the code
                route.run(req, res);
            } catch(e) {
                res.status(500)
                res.send('error' + String(e));
            }         
        });
    } else if (route.method == 'POST') {
        app.post(`/api/${route.name}`, async (req, res) => {
            try {
                // try to execute the code
                route.run(req, res);
            } catch(e) {
                res.status(500)
                res.send('error' + String(e));
            }         
        });
    }
    
});

// 404 routes
app.all('/api', (req, res) => {
    res.status(404);
    res.send('');
});
app.all('/api/*', (req, res) => {
    res.status(404);
    res.send('');
});

module.exports = app;