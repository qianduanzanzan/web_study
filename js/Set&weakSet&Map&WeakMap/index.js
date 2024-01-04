const a = {
    a: 'a'
}

const set = new Set()
set.add('a')
set.add(a)
set.add(a)

console.log(set.size)
console.log(set.keys())
console.log(set.values())
console.log(set.entries())
set.forEach((item) => {
    console.log(item)
})

const weakSet = new WeakSet()

weakSet.add(a)
weakSet.add(a)

weakSet.delete(a)

console.log(weakSet.has(a))

const map = new Map()

map.set('a', '1234')
map.set('b', a)
map.set(a, a)

console.log(map)
console.log(map.size)
console.log(map.entries())
console.log(map.get('b'))
console.log(map.has('b'))
map.forEach((item, i) => {
    console.log(item, i)
})

const weakMap = new WeakMap()

weakMap.set(a, '1234')

// weakMap.set('a','1234')

console.log(weakMap.get('a'))
