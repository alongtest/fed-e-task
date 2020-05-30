const {Maybe, Container} = require('./support');
const fp = require('lodash/fp');


let maybe = Container.of(['do', 'ray', 'me', 'fa', 'so']);

let ex2 = fp.first;

console.log(maybe.map(ex2))