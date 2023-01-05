function instanceOf(data,type){
    const typeProto = type.prototype
    let dataPrototype = data.__proto__
    // console.log(typeProto,dataProtoType)
    // if(typeProto === dataPrototype){
    //     return true
    // }
    while(true){
        if(dataPrototype === typeProto){
            return true
        }

        if(dataPrototype === null) return false
        // console.log(dataPrototype)
        dataPrototype = dataPrototype.__proto__
    }
}

class A{}
class B extends A {}
class C{}

const b = new B()
// 输出 true
console.log(instanceOf(b,B))
// 输出 true
console.log(instanceOf(b,A))
// 输出 false
console.log(instanceOf(b,C))
