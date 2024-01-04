/**
 * 借用构造函数继承
 */

function superType() {
    this.friends = ['小明', '小红']
    this.sayHi = function () {
        console.log('hi')
    }
}

function subType() {
    superType.call(this)
}

var subInstance = new subType()

console.log(subInstance.friends)
subInstance.sayHi()
