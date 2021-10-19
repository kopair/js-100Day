// 从后往前获取数组内容
let arr = [1,2,3,4,5];
console.log(arr.slice(-1));
console.log(arr.slice(-2));
console.log(arr.slice(-3));
console.log(arr.slice(-4));

// 需要某个boolean值来判断当前函数的执行
// 常见写法
// if(contision){
  // common()
// }
// 短句写法
// contision && common()

// 利用｜｜来设置默认值
var a;
a = a || 'default'
a = a || 'new value'
console.log(a);
