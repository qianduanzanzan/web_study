/**
 * 原型链继承
 */

function superType(){
    this.friends = ['小明','小红']
    this.sayHi = function(){
        console.log('hi')
    }
}

function subType(){}

subType.prototype = new superType()

var subInstance1 = new subType()

const a = {};

a.__proto__ = new superType()

console.log(subInstance1.friends)

subInstance1.sayHi()

/**
 * 缺点：对父类的引用类型的操作会修改掉原型链上的值
 */

subInstance1.friends.push('小王')

var subInstance2 = new subType()

console.log(subInstance2.friends)

console.log(a)
