/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//  var twoSum = function(nums, target) {
//     const obj = {}
//     for(let i = 0 ;i < nums.length; i++){
//         if(obj[nums[i]] == undefined){
//             obj[target - nums[i]] = i
//         }else{
//             return [i,obj[nums[i]]]
//         }
//         console.log(obj)
//     }
// };


// console.log(twoSum([3,2,4],6))


// var addTwoNumbers = function(l1, l2) {
//     let newArr = []
//     const count = Math.max(l1.length,l2.length) + 1
//     let a = 0
//     for(let i = 0; i<count;i++){
//         const b = l1[i] || 0
//         const c = l2[i] || 0
//         let sum = b + c + a
//         a = 0
//         if(sum >= 10){
//             newArr[i] = sum%10
//             a = sum / 10
//         }else{
//             newArr[i] = sum
//         }
//     }
//     if(newArr[newArr.length] || newArr[newArr.length] === 0){
//         return newArr
//     }else{
//         newArr.pop()
//         return newArr
//     }
    
// };

// console.log(addTwoNumbers([2,4,3],
//     [5,6,4]))

// var lengthOfLongestSubstring = function(s) {
//     if(s.length <= 1) return s.length
//     let obj = {}
//     let a = []
//     let index = 0
//     for(let i = 0;i< s.length;i++){
//         if(obj[s[i]] !== undefined){
//             a.push(i - obj[s[i]])
//             index = obj[s[i]] + 1
//         }
//         obj[s[i]] = i
//     }
//     console.log(a,index)
//     return Math.max(...a,s.length - index)
// };

// console.log(lengthOfLongestSubstring("cbb"))

// function dataWarp(...num) {
//     return num.map((a) => ({
//         m: a+'',
//         r: a
//     }));
// }
// function calm(a,b) {
//     var r = [
//         {
//             m: `(${a.m}+${b.m})`,
//             r: a.r+b.r
//         },
//         {
//             m: `(${a.m}-${b.m})`,
//             r: a.r-b.r
//         },
//         {
//             m: `(${b.m}-${a.m})`,
//             r: b.r-a.r
//         },
//         {
//             m: `(${a.m}*${b.m})`,
//             r: a.r*b.r
//         },
//     ];
//     a.r !== 0 && r.push({
//         m: `(${b.m}/${a.m})`,
//         r: b.r/a.r
//     });
//     b.r !==0 && r.push({
//         m: `(${a.m}/${b.m})`,
//         r: a.r/b.r
//     });
//     return r;
// }
// function allCalm(a,b,c,d,u) {
//     var s = [], t = [];
//     calm(a,b).forEach((i) => {
//         s = s.concat(calm(i, c));
//         t = t.concat(calm(i, d));
//     });
//     s.forEach((i) => {
//         u = u.concat(calm(i, d));
//     });
//     t.forEach((i) => {
//         u = u.concat(calm(i, c));
//     });
//     return u;
// }
// function get24(a,b,c,d) {
//     [a,b,c,d]= dataWarp(a,b,c,d);
//     allCalm(c,d,b,a,allCalm(b,d,a,c,allCalm(b,c,a,d,allCalm(a,d,b,c,allCalm(a,c,b,d,allCalm(a,b,c,d,[])))))).forEach((i) => {
//         if (i.r === 24) {
//             console.log(i.m);
//         }
//     });
// }

// get24(3,7,5,4)
// let arr = [];
// console.time();
// for (let index = 0; index < 100000; index++) {
//     arr.push(index + '')
// }
// console.timeEnd()
// arr = []
// console.time();
// for (let index = 0; index < 100000; index++) {
//     arr.push(index.toString())
// }
// console.timeEnd()
// arr = []
// console.time();
// for (let index = 0; index < 100000; index++) {
//     arr.push(`${index}`)
// }
// console.timeEnd()
// console.time();
// arr = arr.map(item => parseFloat(item))
// console.timeEnd()
// console.time();
// arr = arr.map(item => parseInt(item))
// console.timeEnd()
// console.time();
// arr = arr.map(item => Number(item))
// console.timeEnd()
// console.time();
// arr = arr.map(item => +item)
// console.timeEnd()

// function test(){
//     let index = 1
//     return function(ccc){
//         console.log(ccc,`第${index}次调用`)
//         index++
//     }
// }

// let zzz = test()
// zzz(3)
// zzz(4)
// zzz = null

// function debounce(fn,delay){
//     let time = null;
//     return function(){
//         if(time){
//             clearTimeout(time)
//             time = null
//         }
//         time = setTimeout(() => {
//             fn(...arguments)
//         }, delay);
//     }
// }

// function throttle(fn,delay){
//     let time = null;
//     return function(){
//         if(!time){
//             time = setTimeout(() => {
//                 fn(...arguments)
//                 clearTimeout(time)
//                 time = null
//             }, delay);
//         }
//     }
// }

// function aaa(n){
//     if(n === 0 || n === 1){
//         return 1
//     }
//     return n*arguments.callee(n-1)
// }

// const a = new Map()

// a.set('xxx','ccc')

// console.log(a.has('xxx'))

// console.table({aaa:1,bbb:2,ccc:3})

class aaa{
    static xxx = 66;
    constructor(name,value){
        this.name = name
        this.value = value
    }
}
const a = new aaa('小明','23')
console.log(a)

class bbb extends aaa{
    constructor(name,value,age){
        super(name,value)
        this.age = age
    }
}

console.log(aaa.xxx)
aaa.xxx = 888
console.log(aaa.xxx)

console.log(new bbb('小明','23',25))

// function testAaa(target){
//     target.vvv = true
// }
// @testAaa
class newClass{
    constructor(sss){
        this.sss = sss
    }

    toString(){
        console.log(this.sss)
    }

    static toString(){
        console.log(this.sss)
    }
}

console.log(new newClass('xxx'))
const ass = new newClass('xxx')
// newClass.toString()
ass.toString()
newClass.toString.call(ass)