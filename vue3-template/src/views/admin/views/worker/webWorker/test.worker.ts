onmessage = function (e) {
    console.log(...arguments)
    if (e.data === 'total') {
        let total = 1;

        for (let i = 0; i < 850; i++) {
            total += i;
            console.log('worker', total)
        }
        postMessage(total);
    } else {
        console.log(e)
    }
}

