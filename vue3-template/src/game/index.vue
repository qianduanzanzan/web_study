<script lang="ts" setup>
import {Myself} from './people/myself';
import {Obstacle} from './obstacle'
import {ref,onMounted,Ref} from 'vue'
const myselfDom:Myself = new Myself() 
const myself:Ref<HTMLElement> | Ref<null> = ref(null)
const game_container:Ref<HTMLElement> | Ref<null> = ref(null)
const obstacle:Obstacle = new Obstacle(200,300,30,40)
onMounted(() => {
    obstacle.init(game_container.value)
    myselfDom.init(myself.value)
})
</script>

<template>
    <div class="game">
        <div ref="game_container" class="container">
            <div ref="myself"></div>
        </div>
    </div>
</template>

<style lang="scss">
@import './style/global.scss';
</style>
