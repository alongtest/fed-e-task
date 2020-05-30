const {Maybe, Container} = require('./support');
const fp = require('lodash/fp');

let safeProp = fp.curry(function(x, o) {
    return Maybe.of(o[x])
})

let user = {id: 2, name: 'Albert'};

let ex3 = (o) => safeProp('name')(o).map(fp.first)

console.log(ex3(user))