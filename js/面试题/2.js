console.log(typeof (() => {})) // function

console.log(typeof ['前端有的玩','公众号']) // object

console.log(typeof null) // object

console.log(typeof undefined) // undefined

console.log(typeof Function.prototype) // function
// instanceof只能判断复杂数据，不能判断简单数据
console.log('子君' instanceof String) // true

console.log(new Date() instanceof Date) // true

console.log(123 instanceof Number)
