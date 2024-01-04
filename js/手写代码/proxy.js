// proxy只能代理一层

/**
 *
 * 目标： 实现一个函数，传入一个对象，返回一个被完全代理的对象
 *
 */

function toProxy(obj) {
    if (typeof obj == 'object') {
        obj = new Proxy(obj, {
            get: function (target, key, value) {
                console.log(target, key)
                return target[key]
            }
        })
        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                const element = obj[key];
                if (typeof element == 'object') {
                    toProxy(element)
                }
            }
        }
    }
    return obj
}


const aaa = {
    a: {
        b: 3
    }
}

const b = toProxy(aaa)

console.log(b.a.b)

// const arr = [
//     1,2,3,4,5,6
// ]

// toProxy(arr)

// console.log(arr[3])
