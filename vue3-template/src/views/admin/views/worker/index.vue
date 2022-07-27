<template>
    <div>
        123456
        <el-button @click="test">测试</el-button>
        <el-button @click="test1">测试1</el-button>
        <el-button @click="test2">测试2</el-button>
        <div ref="xxx"></div>
    </div>
</template>

<script lang="ts" setup>
// import { ref } from "vue";
import Worker from "./webWorker/test.worker.ts?worker"
const myWorker = new Worker()
myWorker.onmessage = function (e) {
    console.log('total', e.data);
};

// const xxx = 123

const test2 = () => {
    console.log(myWorker)
    myWorker.postMessage('xxx');
}

const test = () => {
    let total = 1;
    for (let i = 0; i < 5000000000; i++) {
        total += i;
    }
    console.log('total', total);
}

const test1 = () => {
    myWorker.postMessage('total');
    let total = 1;
    for (let i = 0; i < 500; i++) {
        total += i;
        console.log(total)
    }
}
</script>