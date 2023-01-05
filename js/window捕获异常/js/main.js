window.addEventListener('unhandledrejection',event => {
    console.log(event.promise)
    // console.error(event)
})

function a(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(888)
        },1000)
    })
}

async function b(){
    const c = await a()
    console.log(c)
}

function c(){
    a().then(res => {
        console.log(res)
        return 123
    }).finally((a) => {
        console.log(a)
    })
}

(async function(){
    await b()
    console.log(6666666)
})()
