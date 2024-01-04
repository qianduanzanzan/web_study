// 防抖 debounce
function debounce(fn, time = 500) {
    let timeout = null
    return function () {
        if (!timeout) {
            fn(...arguments)
            timeout = setTimeout(() => {
                clearTimeout(timeout)
                timeout = null
            }, time)
        }
    }
}

// 节流 thorttle
function thorttle(fn, time = 500) {
    let timeout = null
    return function () {
        if (timeout) {
            clearTimeout(timeout)
            timeout = null
        }

        timeout = setTimeout(() => {
            fn(...arguments)
            timeout = null
        }, time)
    }
}

const a = debounce((aaa) => {
    console.log(aaa)
}, 500)

const b = thorttle((aaa) => {
    console.log(aaa)
}, 500)

const c = {
    d: function () {
        console.log(222222)
    }
}

const d = debounce(c.d, 500)
