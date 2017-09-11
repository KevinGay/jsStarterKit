/**
 * Created by kmg_paintballer on 9/6/17.
 */

// To run on localtunnel (pokes hole in firewall to allow your computer to act as a web server for a single application:
// First start application in one terminal, then in another terminal:
// lt --port 3000 --subdomain kgay (exposes this port on the url https://kgay.localtunnel.mec)

// npm runall runs multiple scripts in parallel

// npm start -s runs in silent mode, which exclude all extra messaging in console

// To run a start or test script, the run command is not necessary for npm; however,
    // to run other scripts, you must type 'npm run share', where share is the script name.

// Transpilers are a compiler than takes the source code of a program written in one language as
// its input and produce the equivalent source code in another language.
// There are over 100 transpilers that compile down to JavaScript.


var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();

//When root is requested, send the index.html file.
app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, '../src/index.html'))
});

//open app on the specified port
app.listen(port, function(err) {
    if (err) {
        console.log(error)
    }
    else {
        open('http://localhost:' + port);
    }
});