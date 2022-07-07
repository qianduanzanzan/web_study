<script lang="ts" setup>
import sidebarItem from './sidebar-item.vue';
import { adminRouterChildren } from '@/router/index.ts'
import { ref } from 'vue';
import eventBus from '@/utils/eventBus';

eventBus.on('collapseMenu', (data: any) => {
    isCollapse.value = data
})
const isCollapse = ref(false)
const arr = ref(adminRouterChildren)
</script>

<template>
    <el-menu :collapse-transition="false" :collapse="isCollapse" background-color="#545c64" text-color="#fff"
        class="el-menu-vertical-demo">
        <div class="header-title">{{ !isCollapse ? 'admin模板' : '模板' }}</div>
        <sidebar-item :data="arr" />
    </el-menu>
</template>

<style lang="scss" scoped>
.el-menu-vertical-demo {
    height: 100%;
}

.header-title {
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 24px;
    color: #ffffff;
    font-weight: bold;
}
</style>