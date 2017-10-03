// This file isn't transipled, so much use CommonJS and ES5

// Register bable to transpile before our tests run.
require('babel-register')();

//Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};

