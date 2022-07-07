<template>
    <el-container style="height: 100%">
        <transition :name="'fade'" mode="in-out">
            <el-aside :width="!isCollapse ? '200px' : '64px'">
                <sidebar />
            </el-aside>
        </transition>
        <el-container>
            <el-header>
                <header-top />
            </el-header>
            <el-main class="bgg">
                <!-- <keep-alive>
                    <router-view></router-view>
                </keep-alive> -->
                <router-view v-slot="{ Component }">
                    <keep-alive>
                        <component :is="Component" />
                    </keep-alive>
                </router-view>
            </el-main>
        </el-container>
    </el-container>
    <!-- <div>
        admin
    </div> -->
</template>

<script lang="ts" setup>
import sidebar from './sidebar/index.vue';
import headerTop from './header/index.vue';
import eventBus from '@/utils/eventBus';
import { ref } from 'vue';
const isCollapse = ref(false)
eventBus.on('collapseMenu', (data: any) => {
    isCollapse.value = data
})
</script>

<style lang="scss" scoped>
:deep(.el-header) {
    padding: 0;
}

.bgg {
    background-color: #eeeeee;
    height: 100%;
    overflow: auto;
}
</style>