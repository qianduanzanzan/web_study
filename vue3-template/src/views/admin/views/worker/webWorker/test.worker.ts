// var i = 0;
// function timedCount() {
//     i = i + 1;
//     postMessage(i);
//     setTimeout(timedCount, 1000);
// }
// timedCount();

onmessage = function (e) {
    if (e.data === 'total') {
        let total = 1;

        for (let i = 0; i < 5000000000; i++) {
            total += i;
        }
        postMessage(total);
    }
}
