<template>
    <div>
        213123
    </div>
    <el-button @click="jump2admin">跳转</el-button>
</template>

<script lang="ts" setup>
import { getPublicDropDownList } from "@/api/test"
import { useRouter, useRoute } from 'vue-router';
const router = useRouter(), route = useRoute();
const jump2admin = () => {
    router.push({ name: 'admin' })
}
getPublicDropDownList()
// .then((res: any) => {
//     console.log(res)
// })
</script>