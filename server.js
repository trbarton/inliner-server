var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var Inliner = require('inliner');
var cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.disable('view cache');

app.post('/api', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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

app.get('/api', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log("Working on it!");
    var url = req.query.url;
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