const fp = require('lodash/fp');
const cars = require('./cars'); // 引入车辆数据

let _underscore = fp.replace(/\s+/g, '_');
let sanitizeNames = fp.map(fp.flowRight(_underscore, fp.toLower));

console.log(sanitizeNames(["Hello World", "aLong 23"]))