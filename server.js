var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var Inliner = require('inliner');

app.use(bodyParser.json());

app.get('/notes', function(req, res) {
    res.json({notes: "This is your notebook. Edit this to start saving your notes!"})
});

app.post('/api', function(req, res) {
    console.log("Working on it!");
    var url = req.body.url;
    console.log("URL: " + url);
    var opts = {
        images: false
    };
    new Inliner(url, opts, function (error, html) {
        // compressed and inlined HTML page
        console.log(error);
        //console.log(html);
        res.send(html)
    });

});

app.listen(7300);