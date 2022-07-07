<template>
    <template v-for="item in data">
        <el-sub-menu :index="item.name + ''" :key="item.name"
            v-if="Array.isArray(item.children) && item.children.length > 0">
            <template #title>
                <span>{{ item.meta.title }}</span>
            </template>
            <sidebar-item :data="item.children" />
        </el-sub-menu>
        <el-menu-item :class="{ isCurrent: route.path === item.path }" @click="jumpPage(item)" :index="item.name + ''"
            :key="item.name" v-else-if="!item.meta.showInMenu">
            <svg-icon style="font-size: 20px" class="m-r-8" v-if="item.icon" :iconName="'icon-' + item.icon"></svg-icon>
            <span>{{ item.meta.title }}</span>
        </el-menu-item>
    </template>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
const router = useRouter(), route = useRoute();
defineProps<{
    data: {
        type: Array<any>,
        required: true
    }
}>()


const jumpPage = (route: any) => {
    router.push({ path: route.path })
}
</script>

<style lang="scss" scoped>
.isCurrent {
    background-color: #000000;
    color: #409eff;
}
</style>
