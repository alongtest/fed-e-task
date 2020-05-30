const {Maybe, Container} = require('./support');
const fp = require('lodash/fp');

let ex4 = (n) => {
    return Maybe.of(n).map(parseInt);
};

console.log(ex4('1'))