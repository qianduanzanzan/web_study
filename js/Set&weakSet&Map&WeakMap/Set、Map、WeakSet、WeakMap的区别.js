// Set、Map、WeakSet、WeakMap的区别

// 1、Set 是一种存储唯一值的数据结构，可以使用 add、delete、has 和 size 等方法
// 用法：
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set.size); // 3
console.log(set.has(2)); // true
set.delete(2);
console.log(set.has(2)); // false

// 2、Map 是一种键值对形式的数据结构，可以使用 set、get、delete 和 size 等方法
// 用法：
let map = new Map();
map.set('name', 'John Doe');
map.set('age', 30);
console.log(map.size); // 2
console.log(map.get('name')); // John Doe
map.delete('name');
console.log(map.has('name')); // false

// 3、WeakSet 和 Set 类似，但它的元素必须是对象，且元素被回收后会自动从 WeakSet 中删除。
// 用法
let weakSet = new WeakSet();
let obj1 = {};
let obj2 = {};
weakSet.add(obj1);
weakSet.add(obj2);
console.log(weakSet.has(obj1)); // true
obj1 = null;
console.log(weakSet.has(obj1)); // false

// 4、WeakMap 和 Map 类似，但它的键必须是对象，且键被回收后会自动从 WeakMap 中删除。
// 用法
let weakMap = new WeakMap();
let obj3 = {};
let obj4 = {};
weakMap.set(obj3, 'value1');
weakMap.set(obj4, 'value2');
console.log(weakMap.has(obj3)); // true
obj3 = null;
console.log(weakMap.has(obj3)); // false
