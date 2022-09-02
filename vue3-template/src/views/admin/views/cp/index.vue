<script setup lang="ts">
import { ref,reactive } from 'vue';
const cpList:Array<Array<Number>> = reactive([])
const redList = 33
const blueList = 16

const select = () => {
    // for (let i = 0; i < 6; i++) {
    //     const randomNum = parseInt(`${Math.random() * 32}`) + 1

    // }
    let arr:Array<Number> = []
    while(arr.length < 6){
        const randomNum = parseInt(`${Math.random() * 32}`) + 1
        const set:Set<Number> = new Set([...arr,randomNum])
        arr = Array.from(set)
        arr.sort((a:any,b:any) => a - b)
    }
    console.log(arr)
}
</script>

<template>
    <el-button @click="select">选号</el-button>
</template>
