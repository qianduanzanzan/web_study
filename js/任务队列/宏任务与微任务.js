/**
 * 宏任务：settimeout、
 *
 *
 * 微任务：promise.then、promise.catch、promise.finally await后面的代码是立刻执行的，但是下面的代码都是微任务
 *
 *
 * 执行顺序：同步任务 => 微任务 => 宏任务
 */

// function first() {
//     console.log("first开始");

//     setTimeout(() => {
//         console.log("开始第二轮宏任务");
//         new Promise((resolve, reject) => {
//             resolve("执行第二轮宏任务后的微任务1")
//         }).then((res => {
//             console.log(res);
//             new Promise((resolve, reject) => {
//                 resolve("这是执行第二轮宏任务种微任务1时，所产生的新的微任务,也会在本次执行完再执行下一轮宏任务")
//             }).then((respone => {
//                 console.log(respone);
//             }))

//         }))

//         function reoloveTest() {
//             console.log('reolove是同步的哦,不要搞错了哦');
//             return "执行第二轮宏任务后的微任务2"
//         }

//         new Promise((resolve, reject) => {
//             resolve(reoloveTest())
//         }).then((res => {
//             console.log(res);
//         }))

//         setTimeout(() => {
//             console.log("开始第四轮宏任务");
//             console.log("结束第四轮宏任务,没有微任务了,也没有宏任务了,结束");
//         })

//         console.log("结束第二轮宏任务,有微任务,准备执行微任务");

//     }, 0);

//     setTimeout(() => {
//         console.log("开始第三宏任务");
//         Promise.resolve(console.log("再次提醒resolve里的代码是同步任务哦"))
//         new Promise((resolve, reject) => {
//             resolve("执行第三轮宏任务后的微任务1")
//         }).then((res => {
//             console.log(res);
//         }))

//         new Promise((resolve, reject) => {
//             resolve("执行第三轮宏任务后的微任务2,有宏任务,准备执行宏任务")
//         }).then((res => {
//             console.log(res);
//         }))
//         console.log("结束第三轮宏任务,有微任务,准备执行微任务");
//     }, 0);

//     new Promise((resolve, reject) => {
//         resolve("执行微任务1")
//     }).then((res => {
//         console.log(res);
//     }))

//     console.log("first结束");
// }

// function second() {
//     console.log("second开始");
//     new Promise((resolve, reject) => {
//         resolve("执行微任务2,微任务执行完,取宏任务执行")
//     }).then((res => {
//         console.log(res);
//     }))
//     console.log("second结束");
// }


// console.log("开始第一轮script宏任务");
// first()
// second()
// console.log("结束第一轮script宏任务,调用栈空,检查有微任务,取微任务执行");

// 2 3 6 p2 p1 1 4 5

// st as1 as2 as1e set

const a = {
    name: 'ddd',
    sayHi: function () {
        console.log(`Hi! my name is ${this.name}`)
    }
}

function B(name) {
    this.name = name
}

B.prototype = a

const b = new B('aaa')

b.sayHi()

const c = {
    name: 'bbb'
}

c.__proto__ = a

c.sayHi()

a.sayHi()
