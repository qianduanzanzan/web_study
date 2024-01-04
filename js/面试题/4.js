function myNew(constructor, ...rest) {
    if (constructor(...rest)) return constructor(...rest)
    const obj = {}
    obj.__proto__ = constructor.prototype
    constructor.apply(obj, rest)
    return obj
}

function Fun(name, sex) {
    this.name = name
    this.sex = sex
}

Fun.prototype.getUserInfo = function () {
    return `我的姓名${this.name},我的性别${this.sex}`
}

const fun = myNew(Fun, '子君', '男')
// 我的姓名子君，我的性别男
console.log(fun.getUserInfo())

console.log(fun instanceof Fun)
