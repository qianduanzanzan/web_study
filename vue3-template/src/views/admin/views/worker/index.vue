<template>
    <div>
        123456
        <el-button @click="test">测试</el-button>
        <el-button @click="test1">测试1</el-button>
    </div>
</template>

<script lang="ts" setup>
// if (window.Worker) {
// const myWorker = new Worker('./webWorker/test.ts');

// myWorker.onmessage = function (e) {
//     console.log('total', e.data);
// };

var test = () => {
    let total = 1;
    for (let i = 0; i < 5000000000; i++) {
        total += i;
    }
    console.log('total', total);
}

var test1 = () => {
    console.log(1)
    // myWorker.postMessage('total');
}
// const worker = new Worker('./util/test.ts');
// worker.onmessage = (e) => {
//     console.log(e)
// }

// worker.onmessageerror = (e) => {
//     console.log(e)
// }

// const test = () => {
//     worker.postMessage({ type: 'start', payload: { count: 666 } });
// }
</script>