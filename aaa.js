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

// class aaa{
//     static xxx = 66;
//     constructor(name,value){
//         this.name = name
//         this.value = value
//     }
// }
// const a = new aaa('小明','23')
// console.log(a)

// class bbb extends aaa{
//     constructor(name,value,age){
//         super(name,value)
//         this.age = age
//     }
// }

// console.log(aaa.xxx)
// aaa.xxx = 888
// console.log(aaa.xxx)

// console.log(new bbb('小明','23',25))

// function testAaa(target){
//     target.vvv = true
// }
// @testAaa
// class newClass{
//     constructor(sss){
//         this.sss = sss
//     }

//     toString(){
//         console.log(this.sss)
//     }

//     static toString(){
//         console.log(this.sss)
//     }
// }

// // console.log(new newClass('xxx'))
// const ass = new newClass('xxx')
// // newClass.toString()
// // ass.toString()
// // newClass.toString.call(ass)
// const arr = []
// const date = new Date()
// const s = Symbol('k')

// function getType(data){
//     const type = Object.prototype.toString.call(data);
//     return type.replace(/(\[object |])/g, '')
// }
// console.log(getType(s))
// console.log(getType(arr))
// console.log(getType(date))
// console.log(getType(ass))

// let arr = []
//  function addCurry() {
//     //  console.log(Object.prototype.toString.call(arguments))
//      let arg = Array.prototype.slice.call(arguments); // 递归获取后续参数
//      console.log(arg)
//     //  arr = arr.concat(arg);
//     //   if (arg.length === 0) { // 如果参数为空，则判断递归结束
//     //       return arr.reduce((a,b)=>{return a+b}) // 求和
//     //   } else {
//     //       return addCurry;
//     //   }
//   }
// addCurry(1,3)
// console.log(addCurry(1))

// export const a = 1

// export function sayHi(){
//   console.log('hi')
// }

// const xsxsxs = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve(123456)
//   },1000)
// })

// async function test(){
//   const xxx = await xsxsxs
//   // return xxx
// }

// test().then(res => {
//   console.log(res,888)
// })

// const a = [
//   {
//     a: () => {
//       console.log(1)
//       return true
//     }
//   },
//   {
//     a: () => {
//       console.log(2)
//       return true
//     }
//   },
//   {
//     a: () => {
//       console.log(3)
//       return true
//     }
//   },
//   {
//     a: () => {
//       console.log(4)
//       return true
//     }
//   },
//   {
//     a: () => {
//       console.log(5)
//       throw new Error(123)
//       return true
//     }
//   },
//   {
//     a: () => {
//       console.log(6)
//       return true
//     }
//   },
//   {
//     a: () => {
//       console.log(7)
//       return true
//     }
//   }
// ]

// console.log(a.every(item => item.a()))

// for (var index = 0; index < 10; index++) {
//   ((i) => {
//     setTimeout(() => {
//       console.log(i)
//     });
//   })(index)
// }

// try{
//   [1,2,3,4,5,6,7,8,9].forEach(item => {
//     console.log(item)
//     if(item > 7){
//       throw new Error()
//     }
//   })
// }catch(e){}

// console.log('结束')

// var a = 1

// const _createArray = (number) => {
//     // 补全代码
//     const arr = new Array(number)
//     arr.fill(3)
//     return arr
// }
// // _createArray(3)
// console.log(_createArray(3))

// const _shouldUpdate = (oldVersion, newVersion) => {
//     // 补全代码
//     const a = Number(oldVersion.replace(/\./g,''))
//     const b = Number(newVersion.replace(/\./g,''))
//     console.log(a,b)
    
//     return b > a
// }
// const _getUniqueNums = (start,end,n) => {
//     // 补全代码
//     const difference = end - start
//     const arr = new Set()
//     for(let i = 0;i < n;i++){
//         arr.add(parseInt(Math.random() * difference) + start)
//     }
//     return Array.from(arr)
// }

// console.log(_getUniqueNums(2,10,4))
// // console.log(_shouldUpdate('0.0.2','0.0.0'))
// document.addEventListener


// const _delete = (array,index) => {
//     // 补全代码
//     return array.filter((item,idx)=> index != idx)
// }

// console.log(_delete([1,2,3],1))

// class Human {
//     constructor(name) {
//         this.name = name
//         this.kingdom = 'animal'
//         this.color = ['yellow', 'white', 'brown', 'black']
//     }
//     // 补全代码
//     getName() {
//         return this.name
//     }
// }

// // 补全代码
// class Chinese extends Human{
//     constructor(name,age) {
//         super(name)
//         this.age = age
//     }
//     getAge() {
//         return this.age
//     }
// }

// console.log('https://nowcoder.com/online?id=1&salas=1000'.replace(/(.*)\?/g,''))

// document.querySelector

// const _rank = array => {
//     // 补全代码
//     const arr = array.sort((a,b) => {
//         console.log((a.chinese + a.math + a.english) - (b.chinese + b.math + b.english))
//         return (a.chinese + a.math + a.english) - (b.chinese + b.math + b.english)
//     })
//     return arr
// }

// let grade = [{name: 'nowcoder1',chinese: 73,math: 80,english: 72},{name: 'nowcoder2',chinese: 59,math: 53,english: 36},{name: 'nowcoder3',chinese: 94,math: 96,english: 94}];
// let array = _rank(grade)
// console.log(array)

// const _searchStrIndexOf = (str, target) => {
//     // 补全代码
//     let count = 0
//     let index = str.indexOf(target)
//     console.log(index)
//     if(index > -1){
//         count++
//         count += _searchStrIndexOf(str.substr(index + target.length), target)
//     }
//     return count
// }

// console.log(_searchStrIndexOf('axaxacaxas','ax'))

const _isFibonacci = array => {
    // 补全代码
    if(array.length < 3){
        return false
    }
    let flag = true
    array.reduce((a,b) => {
        console.log(a,b)
        if(a !== 0 && b === 0 && a !== b){
            flag = false
        }
        return b
    })
    return flag
}

console.log(_isFibonacci([0,1,1,2,3,6]))
