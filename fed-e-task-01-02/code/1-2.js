const fp = require('lodash/fp');
const cars = require('./cars'); // 引入车辆数据


let getFirstName = fp.flowRight(fp.prop('name'), fp.first);

console.log(getFirstName(cars))