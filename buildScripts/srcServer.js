/**
 * Created by Kevin Gay on 9/6/17.
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

// A js bundler is a tool that puts your code and all dependencies into one js file so browsers can user npm packages
// Webpack bundles css, fonts, images, and allows bundle splitting, where users can download different modules depending
// on which portion of the app they're using

// ES6 (ES2017) should be used in current projects because it's standardized.

// To debug transpiled code, use sourcemaps. Sourcemaps code back to original source.
// Only downloaded if you open developer tools

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

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