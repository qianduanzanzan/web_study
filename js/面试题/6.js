console.log([1, 2, 3].map(parseInt))

console.log(parseInt(1, 0))
console.log(parseInt(2, 3))
console.log(parseInt(10, 3))
// parseInt两个参数，第一个参数是要解析的字符串，第二个参数是基数，比如第一个是10，第二个是3，就相当于是3进制里面的10转换到十进制的数字是多少，也就是3
// 前面是1时不管后面是多少都是1
// 后面的表示要解析的数字的基数。该值介于 2 ~ 36 之间。
