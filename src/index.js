/**
 * Created by Kevin Gay on 9/11/17.
 */

// Can import css file just like a javascript file.
// Webpack bundles css with js and injects it onto the page!

import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
// Type debugger to use breakpoint
//debugger;

// Note: Template strings (ES6) use back-ticks (``) rather than single quotes!!
console.log(`I would pay ${courseValue} for this awesome course!`); //eslint-disable-line no-console
