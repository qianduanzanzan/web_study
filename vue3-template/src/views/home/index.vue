<template>
    <div>
        213123
    </div>
    <el-button @click="jump2admin">跳转</el-button>
</template>

<script lang="ts" setup>
// import { test } from '@/api/mock'
import { useRouter, useRoute } from 'vue-router';
const router = useRouter(), route = useRoute();
const jump2admin = () => {
    router.push({ name: 'admin' })
}

// test().then(res => {
//     console.log(res)
// })
</script>