<template>
    <el-button @click="change">测试</el-button>
    <el-button @click="change1">测试1</el-button>
</template>

<script lang="ts" setup>
import store from '@/store';
const test = store.test()
const change = () => {
    test.count++
}
const change1 = () => {
    test.change()
    test.show()
}
</script>