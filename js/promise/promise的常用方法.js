// Promise的用法
// 1:用构造器创建一个Promise对象，该构造函数接受一个函数作为参数，
// 这个函数被称为执行器函数，执行器函数接收两个函数为参数，resolve、reject，
// resolve用于处理异步操作成功的情况，reject用于处理异步操作失败的情况
const promise = new Promise((resolve,reject) => {
    // 异步操作
    if (true) {
        resolve(/* 成功的结果 */);
    } else {
        reject(/* 失败的结果 */);
    }
})

// 2:Promise 链式调用
// 使用 Promise 对象的 then 方法来处理异步操作的成功结果，使用 catch 方法
// 来处理异步操作的失败结果，也可以使用 finally 方法来处理无论异步操作成功或失败都要执行的逻辑。

promise.then(res => {
    // res是resolve里面的参数
}).catch(e => {
    // e是reject里面的参数
}).finally(() => {
    // 无论Promise成功还是失败，都会执行到这里
})

// 3：Promise.all
// Promise.all 方法可以接收一个 Promise 对象的数组作为参数，它会等待所有 Promise 对象都成功执行后
// 才会返回一个包含所有 Promise 对象成功结果的数组。如果其中一个 Promise 
// 对象失败了，则 Promise.all 方法会直接返回一个失败的 Promise 对象。

const promiseA = new Promise((resolve,reject) => {
    setTimeout(() => {
       resolve('a') 
    }, 300);
})

const promiseB = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('b') 
     }, 200);
})

Promise.all([promiseA,promiseB]).then(res => {
    console.log(res)
})

// Promise.race
// Promise.race 方法用于将多个Promise实例包装成一个新的Promise实例，
// 它接受一个Promise实例数组作为参数，并返回一个新的Promise实例。
// 当其中任意一个Promise实例完成时，新的Promise实例就会完成，并返回完成的Promise实例的结果或原因。

Promise.race([promiseA,promiseB]).then(res => {
    console.log(res)
})

// 使用Promise.all 和Promise.race 可以方便地处理多个异步操作的结果，
// 其中Promise.all可以处理所有Promise实例成功的情况，
// Promise.race可以处理其中任意一个Promise实例完成的情况。
