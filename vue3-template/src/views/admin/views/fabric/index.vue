<template>
    <div class="canvasHeader">
    </div>
    <div @resize="onResize" tabindex="1" ref="canvasMian" class="canvasMian">
        <canvas id="xxx" :width="canvasWidth" :height="canvasHeight"></canvas>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue';
import { fabric } from 'fabric'; // 引入 fabric

const canvasWidth = ref(0) //画板宽
const canvasHeight = ref(0) //画板高
const canvasMian: any = ref(null) //画板工具栏

console.log(fabric)

const init = () => {
    const canvas = new fabric.Canvas('xxx', {
        // backgroundColor: "#000000"
    }) // 这里传入的是canvas的id
    // 创建一个长方形
    // fabric.StaticCanvas 静态画布，没有动作
    const rect1 = new fabric.Rect({
        top: 30, // 距离容器顶部 30px
        left: 30, // 距离容器左侧 30px
        width: 100, // 宽 100px
        height: 100, // 高 60px
        fill: 'red' // 填充 红色
    })

    const rect2 = new fabric.Rect({
        top: 30, // 距离容器顶部 30px
        left: 130, // 距离容器左侧 30px
        width: 100, // 宽 100px
        height: 100, // 高 60px
        fill: 'blue' // 填充 红色
    })

    const circle1 = new fabric.Circle({
        radius: 50,
        top: 300,
        left: 300,
        fill: 'red'
    })

    const circle2 = new fabric.Circle({
        radius: 60,
        top: 290,
        left: 290,
        fill: 'transparent',
        stroke: 'blue'
    })

    // const group1 = new fabric.Group()

    // 在canvas画布中加入矩形（rect）。add是“添加”的意思
    canvas.add(rect1)
    canvas.add(rect2)

    canvas.add(circle1)
    canvas.add(circle2)
}

// const onResize = () => {
//     console.log(1111111)
//     resize()
// }

const resize = () => {
    canvasWidth.value = canvasMian.value.clientWidth
    canvasHeight.value = canvasMian.value.clientHeight
}

onMounted(() => {
    // console.log(canvasMian)
    // canvasMian.value.onfocus = () => {
    //     console.log(1111)
    // }

    // canvasMian.value.onblur = () => {
    //     console.log(22222)
    // }

    resize()
    nextTick(() => {
        init()
    })
})


</script>

<style lang="scss" scoped>
.canvasHeader {
    box-sizing: border-box;
    padding: 8px;
    width: 100%;
    height: 60px;
    margin-bottom: 8px;
    background-color: #ffffff;
    border-radius: 8px;
    display: flex;
    align-items: center;

    &:nth-child(2n) {
        margin: 0 8px;
    }

    .header-icon {
        padding: 8px;
        height: 28px;
        cursor: pointer;

        &:hover {
            background-color: #409eff;
            color: #ffffff;
            border-radius: 8px;
        }
    }
}

.canvasMian {
    width: 100%;
    position: relative;
    height: calc(100% - 68px);
    background-color: #ffffff;
    border-radius: 8px;
}
</style>
