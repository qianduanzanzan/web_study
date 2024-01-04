/**
 * 1.首先创建一个空对象
 * 2.将方法的this指向这个对象
 * 3.讲对象的原型链指向这个方法
 * 3.返回这个对象
 *
 */

function a(name) {
    this.name = name

    return {
        xxx: this.name
    }
}

function _new(fn, ...args) {
    if (typeof fn !== 'function') {
        throw new Error('必须是个函数')
    }
    const newObj = {}
    const value = fn(...args)
    if (value) {
        return value
    } else {
        fn.apply(newObj, args)
        newObj.__proto__ = fn.prototype
        return newObj
    }
}

// console.log(new a('张三'))
// console.log(_new(a,'张三'))

const A = new a('张三')
const B = _new(a, '张三')

console.log(A)
console.log(B)

console.log(A.__proto__)
console.log(B.__proto__)

console.log(A instanceof a)
console.log(B instanceof a)
