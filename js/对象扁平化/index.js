function flat(obj, key = "", res = {}, isArray = false) {
    console.log(key)
    for (let [k, v] of Object.entries(obj)) {
        if (Array.isArray(v)) {
            let tmp = isArray ? key + "[" + k + "]" : key + k
            flat(v, tmp, res, true)
        } else if (typeof v === "object") {
            let tmp = isArray ? key + "[" + k + "]." : key + k + "."
            flat(v, tmp, res)
        } else {
            let tmp = isArray ? key + "[" + k + "]" : key + k
            res[tmp] = v
        }
    }
    return res
}

const obj = {
    a: {
        b: 1,
        e:[{
            xx:69
        }]
    },
    c: [1, 2, 3, 4]
}

console.log(flat(obj))
