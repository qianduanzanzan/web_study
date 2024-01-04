function isOdd1(n){
    return n >> 1 === Math.floor(n / 2)
}

function isOdd2(n){
    return n % 2 == 0
}

function isOdd3(n){
    return n & 1 == 0
}

const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

console.time('isOdd1')
for(let i = 0;i < 100000;i++){
    a.forEach(item => {
        isOdd1(item)
    })
}
console.timeEnd('isOdd1')

console.time('isOdd2')
for(let i = 0;i < 100000;i++){
    a.forEach(item => {
        isOdd2(item)
    })
}
console.timeEnd('isOdd2')

console.time('isOdd3')
for(let i = 0;i < 100000;i++){
    a.forEach(item => {
        isOdd3(item)
    })
}
console.timeEnd('isOdd3')

// & 二进制两个都是1则为1
// | 两个有一个为1则为1
// ^ 两个只有一个为1则为1
// ~ 0变1，1变0符号位也变(~x = -x-1)
// << 左移指定位数且符号位不变
// >> 右移指定位数且符号位不变
// >>> 右移指定位数且符号位也跟着移动(正数在无符号右移和有符号右移结果相同，负数因为符号位也移动有时候会导致结果非常大)

// 判断一个数是不是2的整数幂
// function a(n){
//     return n & (n - 1)
// }

// // 小数取整 因为位运算操作的是整数位
// function b(n){
//     return n | 0
// }

// function c(n){
//     return n ^ 0
// }

// // 比较两个数的整数部分是否相等
// function d(n,m){
//     return n ^ m
// }


function xsx(num){
    return num == (num >> 1) << 1
}

console.log(xsx(8966))
