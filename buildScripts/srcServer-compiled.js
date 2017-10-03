'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _open = require('open');

var _open2 = _interopRequireDefault(_open);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackConfig = require('../webpack.config.dev');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */

var port = 3000; /**
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

// Linting: parses code and looks for mistakes before runtime
// "lint": "esw webpack.config.* src buildScripts --color" in package.json tells eslint watch to watch the given dirs

// Unit tests should run when you hit save
// Integration tests sould run on demand, or in QA
// For this project, mocha for tests, chai for assertion library, JSDOM for helper library

// Continuous integration makes sure that the app runs on all platforms. Having a CI server
//  keeps everything standard. TravisCI is a popular integration server that functions with github.
// Appveyor tests on Windows. TravisCI is for Unix

var app = (0, _express2.default)();
var compiler = (0, _webpack2.default)(_webpackConfig2.default);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: _webpackConfig2.default.output.publicPath
}));

//When root is requested, send the index.html file.
app.get('/', function (req, res) {
    res.sendFile(_path2.default.join(__dirname, '../src/index.html'));
});

//open app on the specified port
app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        (0, _open2.default)('http://localhost:' + port);
    }
});

//# sourceMappingURL=srcServer-compiled.js.map