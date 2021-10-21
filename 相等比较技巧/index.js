// 1. == 会发生类型转换
// 2. === 全等不会发生类型转换但是会出现
console.log(NaN === NaN) //false

// 3.使用object.is
console.log(Object.is(NaN,NaN))


// 练习使用bind
// bind的语法 ： fun.bind(thisArg[, arg1[, arg2[, ...]]])

const myCar = {
  brand: 'Ford',
  type: 'Sedan',
  color: 'Red'
 };

const getType = function(){
  console.log(this.brand);
}

getType.bind(myCar)();
// 相当于，将getType里面的this指向myCar，并且执行getType这个函数