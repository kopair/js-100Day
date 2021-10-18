// 1.迭代一个空数组 
// 常用的方法
const arr = new Array(4);

const arra = arr.map((item, index) => index);
console.log(arra);

// 使用apply 
const arr2 = Array.apply(null, new Array(4));
const asd = arr2.map((ele, index) => index);
console.log(asd);

// 2.传递空参数
function method(asd1, asd2, asd3) {
  console.log(asd1, asd2, asd3)
}
// 利用扩展运算符
method(...['ass',,23])

//3.数组去重
const arr3 = [...new Set(1,2,3,4,5,5,5,5,5)]
