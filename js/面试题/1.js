// var a = {
//     i:6,
//     fn: test
// }

// var i = 10

// function test(){
//     console.log(this.i)
// }

// a.fn()

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// var divide = function(dividend, divisor) {
//     const symbol = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0) ? 1 : -1
//     console.log(symbol)
//     if(Math.abs(dividend) < Math.abs(divisor)) return 0
//     if(Math.abs(divisor) == 1) return symbol > 0 ? Math.abs(dividend) : Number(`-${Math.abs(dividend)}`)
//     return symbol > 0 ? Math.abs(1 + divide(Math.abs(dividend) - Math.abs(divisor),Math.abs(divisor))) : 0 - Math.abs(1 + divide(Math.abs(dividend) - Math.abs(divisor),Math.abs(divisor)))
// };

// console.log(divide(-1,1))


function asyncAdd(a, b, callback) {
    setTimeout(function () {
        callback(null, a + b)
    }, 1000)
}

/**
 * 请在此方法中调用asyncAdd方法，完成数值计算
 * @param  {...any} rest 传入的参数
 */
async function sum(...rest) {
    // 请在此处完善代码
    let result = 0
    const obj = {}
    obj.toString = () => {
        return result
    }
    const promises = []
    for (const i of rest) {
        promises.push(new Promise((resolve) => {
            asyncAdd(obj, i, (_, res) => {
                resolve(res)
            })
        }).then((res => {
            result = res
        })))
    }

    await Promise.all(promises)
    return result
}

//   let start = window.performance.now()
console.time()
sum(1, 2, 3, 4, 5, 6).then(res => {
    // 请保证在调用sum方法之后，返回结果21
    console.log(res)
    // console.log(`程序执行共耗时: ${window.performance.now() - start}`)
    console.timeEnd()
})

