function myInstanceof(data, type) {
    let proto = data.__proto__;
    const prototype = type.prototype;

    while (proto) {

        if (proto === prototype) {
            return true
        }

        proto = proto.__proto__
        if (proto === null) {
            return false
        }
    }
}

function B() {
    this.b = true
}

const a = new B()

console.log(myInstanceof(a, Object))

class C {
    constructor() {
        this.c = true
    }
}

const d = new C()
console.log(myInstanceof(d, C))
