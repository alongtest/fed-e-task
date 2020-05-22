### 1、说出下列代码最终执行结果
````
var a = []
for (var i = 0; i < 10; i ++) {
    a[i] = function() {
        console.log(i)
    }
}
a[6]();
````
输出结果是10  
var声明的变量不存在块级作用域，因此for循环中的i变量和方法内部都是同一作用域的同一变量。另外由于javasricpt代码是顺序执行，当代码执行到 a〔6〕()时，for循环已经循环完成，此时i的值为10,此后a数组中的每一个函数执行时打印结果都会是最外层作用域中的i,也就是10

### 2、说出下列代码最终执行结果
````
var tmp = 123;
if (true) {
    console.log(tmp);
    let tmp;
}
````
输出结果
````
Uncaught ReferenceError: tmp is not defined
````
let 定义的变量存在暂时性死区，在定义前访问会报错

### 3、结合ES6新语法，用最简单的方式找出数组的最小值
````
var arr = [12, 34, 32, 89, 4];
````
````
arr.reduce((prev,curr) => {
    return curr < prev ? curr : prev
},arr[0])
````
### 4、详细说明var、let、const三种声明变量的方式之间具体差别
var声明的变量不存在块级作用域，并且存在变量提升，在变量声明之前使用可以取到一个undefined的值。  
let和const声明的变量存在块级作用域，在声明之前使用会报错。let变量值可以随意赋值，const的值不允许改变，因此const在定义时必须初始化

### 5、说出下列代码的执行结果，并解释为什么
````
    var a = 10;
    var obj = {
        a: 20,
        fn() {
            setTimeout(() => {
                console.log(this.a);
            })
        }
    }
    obj.fn();
````
输出结果是20  
箭头函数中的this会绑定在定义时的上下文环境中，即this指向obj，最终打印结果为obj.a = 20
### 6、简述Symbol类型的用途
可以避免属性名冲突，为对象定义独一无二的属性名  
用于模拟对象私有成员,在对象内部由于缓存了Symbol的索引，可以对Symbol属性进行操作，在对象外部由于拿不到Symbol的索引所以无法对属性访问

### 7、说说什么是浅拷贝，什么是深拷贝
浅拷贝只能拷贝对象的第一层属性，如果对象第一层属性值是基础数据类型，会复制该属性的值，如果属性的值是一个对象，那么会复制该对象的地址索引  
深拷贝则会为所有对象类型的值开辟新的内存空间，并将对象中的属性拷贝到新的内存空间上

### 8、你是如何理解JS异步任务的，Eventloop 是做什么，什么是宏任务， 什么是微任务
异步任务就是需要一段时间才会完成的任务，js线程遇到异步操作会将异步操作放入异步调用线程（web APIs），之后立即开始下一个任务。  
异步调用线程会在异步执行完成后，将回调函数压入消息队列中
在js主线程的函数栈操作完毕后，Event Loop 会循环将回调函数取出回调函数交给主线程执行。  
Event loop不断地从消息队列中取出任务并交给主线程执行，这些消息队列中的任务就是宏任务。  
而微任务就是一个异步执行地函数，会在当前主函数执行完成之后，当前宏任务结束之前执行。  

### 9、将下面代码使用Promise改进
````
setTimeout(function() {
    var a = "hello";
    setTimeout(function() {
        var b = "lagou";
        setTimeout(function(){
            var c = "I ❤ U";
            console.log(a + b + c);
        }, 10)
    }, 10)
}, 10)
````
改进后
````
new Promise(resolve => {
    var a = "hello";
    setTimeout(function() {
        resolve(a);
    }, 10)
}).then(res => {
    var b = "lagou";
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(res + b);
        }, 10)
    });
}).then(res => {
    var c = "I ❤ U";
    setTimeout(function() {
        console.log( res + c );
    }, 10)
})
````
### 10、简述TypeScript与javascript之间的关系
TypeScript是javascript的超集 包括JavaScript、类型系统、ES6

### 11、谈谈Typescript的优缺点
缺点：
-  学习需要成本
-  增加开发过程中的任务量  

优点
- 代码编译阶段可以发现类型异常
- 编码提示对编码过程更加友好
- 修改成员名时可以轻松定位使用该成员的地方、减少不必要的类型判断
