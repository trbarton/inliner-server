var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var Inliner = require('inliner');

app.use(bodyParser.json());

app.get('/notes', function(req, res) {
    res.json({notes: "This is your notebook. Edit this to start saving your notes!"})
});

app.get('/api', function(req, res) {
    new Inliner('http://bbc.co.uk/news/popular/read', function (error, html) {
        // compressed and inlined HTML page
        console.log(error);
        console.log(html);
        res.send(html)
    });

});

app.listen(3000);