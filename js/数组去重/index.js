function arrayDuplicateRemoval(arr,key){
    if(!key){
        return Array.from(new Set(arr))
    }
    const tmpObj = {}
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if(!tmpObj[item[key]]){
            result.push(item)
        }
        tmpObj[item[key]] = true
    }

    return result
}


console.log(arrayDuplicateRemoval([1,2,3,4,5,6,1,2,3,5,6]))

const a = [
    {name: 22},
    {name: 21},
    {name: 23},
    {name: 22},
    {name: 24},
    {name: 23},
    {name: 21},
    {name: 21},
    {name: 27}
]

console.log(arrayDuplicateRemoval(a,'name'))
