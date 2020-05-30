const fp = require('lodash/fp');
const cars = require('./cars'); // 引入车辆数据


let _average = function(xs) {
    return fp.reduce(fp.add, 0, xs) / xs.length
}

// let averageDollarValue = function (cars) {
//     let dollar_values = fp.map(function(car) {
//         return car.dollar_value
//     }, cars)
//     return _average(dollar_values);
// }

let dollarValues = fp.map(car => car.dollar_value);
let averageDollarValue = fp.flowRight(_average, dollarValues);

console.log(averageDollarValue(cars));