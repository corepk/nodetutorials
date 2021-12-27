// Modules - Encapsulated Code (only share minimum)
// CommonJS - every file is module (by default)
const names = require('./4-names');
const sayHi =require('./5-utils'); 
const alternative =require('./6-alternative-flavour');
require('./7-mind-generade')
console.log(alternative);
sayHi('Prashant')
sayHi(names.prashant);
sayHi(names.tyagi);