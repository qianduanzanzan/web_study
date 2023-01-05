const a1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    },3000)
})

const a2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject(2)
        resolve(2)
    },4000)
})

Promise.all([a2,a1]).then((res) => {
    console.log(res)
    return res
}).then(e => {
    console.log(e)
})
