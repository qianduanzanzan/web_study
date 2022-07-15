<template>
    <div class="header">
        <el-icon class="pointer" @click="collapseMenu" color="#fff" :size="26">
            <Fold v-if="!isCollapse" />
            <Expand v-else />
        </el-icon>
        <div class="flex a-c">
            <!-- <svg-icon style="font-size: 20px" iconName="icon-kafei"></svg-icon> -->
            <el-icon :size="20" class="m-r-20 pointer">
                <full-screen v-if="!isFull" />
            </el-icon>
            <el-avatar
                src="https://img2.baidu.com/it/u=4244269751,4000533845&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1657904400&t=7b3f50c245381077202716389811f4fe"
                class="m-r-8" :size="40" />
            <el-dropdown>
                <span class="el-dropdown-link">
                    admin
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {
    Expand,
    Fold,
    ArrowDown,
    FullScreen
} from '@element-plus/icons-vue'
import { ref, Ref } from 'vue';
import eventBus from '@/utils/eventBus';
const isCollapse: Ref<boolean> = ref(false)

const collapseMenu = () => {
    isCollapse.value = !isCollapse.value
    eventBus.emit('collapseMenu', isCollapse.value)
}

const isFull = ref(false)
</script>

<style lang="scss" scoped>
.header {
    height: 100%;
    display: flex;
    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
    background-color: #545c64;
    color: #ffffff;
}

.el-dropdown-link {
    color: #ffffff
}
</style>