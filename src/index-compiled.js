'use strict';

require('./index.css');

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Kevin Gay on 9/11/17.
 */

// Can import css file just like a javascript file.
// Webpack bundles css with js and injects it onto the page!

var courseValue = (0, _numeral2.default)(1000).format('$0,0.00');
// Type debugger to use breakpoint
//debugger;

// Note: Template strings (ES6) use back-ticks (``) rather than single quotes!!
console.log('I would pay ' + courseValue + ' for this awesome course!'); //eslint-disable-line no-console

//# sourceMappingURL=index-compiled.js.map