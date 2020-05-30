const fp = require('lodash/fp');
const cars = require('./cars'); // 引入车辆数据

// 重新实现函数
// let isLastInStock = function(cars) {
//     let last_car = fp.last(cars);
//     return fp.prop('in_stock', last_car);
// }

let isLastInStock = fp.flowRight(fp.prop('in_stock'), fp.last);

console.log(isLastInStock(cars))





