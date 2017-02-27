var express = require("express");
var bodyParser = require("body-parser");
var Inliner = require('inliner');
var cors = require('cors');

var app = express();
app.use(bodyParser.json());
app.use(cors());


// Initialize the app.
var server = app.listen(process.env.PORT || 7300, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});


// CONTACTS API ROUTES BELOW
// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}

app.get("/", function (req, res, next) {
    res.json({message: 'Hello World!'});

});

app.post("/api", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var url = req.body.url;
    console.log(url);
    var opts = {
        images: false,
        compressCSS: true,
        compressJS: true
    };
    new Inliner(url, opts, function (error, html) {
        if (error) {
            console.log(error);
            res.status(500).json({"status": "error"});
        } else {
            // compressed and inlined HTML page
            res.status(200).json({"status": "ok", "html": html});
        }
    });
});