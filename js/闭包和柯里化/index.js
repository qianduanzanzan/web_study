function currying(fn) {
  let argumentArr = []
  function curried() {
    argumentArr = [...argumentArr,...arguments]
    return curried
  }
  curried.toString = function(){
    return fn(...argumentArr)
  }
  return curried
}

function add () {
  return [...arguments].reduce((a,b) => a + b)
}

const _add = currying(add)

console.log(_add(1,2,3,4,5,6)(7)(8)(9)(10)(13))
