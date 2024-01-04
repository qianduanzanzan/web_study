const a = {
    a: function (a, b, c, d, e) {
        console.log(this.name, a, b, c, d, e)
    }
}

const b = {
    name: 'xxx'
}

Function.prototype.myCall = function (obj, ...arg) {
    if (typeof this !== "function") throw new Error('Not a function')
    const key = Symbol('this')
    if (obj === undefined || obj === null) {
        obj = typeof window === 'undefined' ? global : window
    }
    obj[key] = this
    obj[key](...arg)
    delete obj[key]
}
a.a.call(b, 1, 2, 3, 4, 5)
a.a.myCall(b, 1, 2, 3, 4, 5)

Function.prototype.myApply = function (obj, arg) {
    if (typeof this !== "function") throw new Error('Not a function')
    const key = Symbol('this')
    if (obj === undefined || obj === null) {
        obj = typeof window === 'undefined' ? global : window
    }
    obj[key] = this
    obj[key](...arg)
    delete obj[key]
}
a.a.apply(b, [1, 2, 3, 4, 5])
a.a.myApply(b, [1, 2, 3, 4, 5])

Function.prototype.myBind = function (asThis) {
    if (typeof this !== 'function') {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }
    var fn = this;
    var args1 = Array.prototype.slice.call(arguments, 1);
    var resultFn = function () {
        var args2 = Array.prototype.slice.call(arguments);
        return fn.apply(this instanceof resultFn ? this : asThis, args1.concat(args2));
    }

    var fnNo = new Function();
    fnNo.prototype = fn.prototype;
    resultFn.prototype = new fnNo();
    return resultFn;
}

const c = a.a.bind(b)
const d = a.a.myBind(b)

c(2, 3, 4, 5, 6)
d(3, 4, 5, 6, 7)
