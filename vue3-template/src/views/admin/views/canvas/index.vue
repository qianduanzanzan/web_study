<template>
    <div class="canvasHeader">
        <el-popover placement="bottom" :width="360" trigger="click">
            <template #reference>
                <div class="header-icon">
                    <el-icon size="28px">
                        <Setting />
                    </el-icon>
                </div>
            </template>
            <div class="setting-content">
                <div class="grid">
                    <span>线条粗细</span>
                    <div>
                        <el-slider v-model="lineWidth" :min="1" :max="100" :format-tooltip="formatTooltip" size="small"
                            show-input />
                    </div>
                </div>
                <div class="grid">
                    <span>线条颜色</span>
                    <div>
                        <el-color-picker v-model="lineColor" />
                    </div>
                </div>
                <div class="grid">
                    <span>文字大小</span>
                    <div>
                        <el-slider v-model="fontWidth" :min="1" :max="100" :format-tooltip="formatTooltip" size="small"
                            show-input />
                    </div>
                </div>
                <div class="grid">
                    <span>文字颜色</span>
                    <div>
                        <el-color-picker v-model="fontColor" />
                    </div>
                </div>
            </div>
        </el-popover>
        <el-tooltip content="画笔" placement="bottom">
            <div class="mr8" :class="{ active: type === 'pen' }">
                <el-button @click="type = 'pen'" link>
                    <svg-icon style="font-size: 28px" iconName="icon-huabi"></svg-icon>
                </el-button>
            </div>
        </el-tooltip>
        <el-tooltip content="橡皮擦" placement="bottom">
            <div class="mr8" :class="{ active: type === 'eraser' }">
                <el-button @click="type = 'eraser'" link>
                    <svg-icon style="font-size: 28px" iconName="icon-xiangpica"></svg-icon>
                </el-button>
            </div>
        </el-tooltip>
        <el-tooltip content="文字" placement="bottom">
            <div class="mr8" :class="{ active: type === 'text' }">
                <el-button @click="type = 'text'" link>
                    <svg-icon style="font-size: 28px" iconName="icon-wenzi"></svg-icon>
                </el-button>
            </div>
        </el-tooltip>
        <el-tooltip content="图片" placement="bottom">
            <div class="mr8" :class="{ active: type === 'image' }">
                <el-button @click="type = 'image'" link>
                    <el-icon size="28px">
                        <Picture />
                    </el-icon>
                </el-button>
            </div>
        </el-tooltip>
        <el-tooltip content="撤销" placement="bottom">
            <el-button class="mr8" link>
                <el-icon size="28px">
                    <ArrowLeft />
                </el-icon>
            </el-button>
        </el-tooltip>
        <el-tooltip content="重做" placement="bottom">
            <el-button class="mr8" link>
                <el-icon size="28px">
                    <ArrowRight />
                </el-icon>
            </el-button>
        </el-tooltip>
    </div>
    <div ref="canvasMian" class="canvasMian" droppable @dragover.prevent @drop.prevent="xxx">
        <canvas :width="canvasWidth" :height="canvasHeight" @mousemove="draw" @mousedown.left="beginDraw"
            @mouseleave="endDraw" @mouseup="endDraw" ref="canvas"></canvas>
        <div class="canvas-input"
            :style="{ display: canvasInputDisplay, top: `${canvasInputTop}px`, left: `${canvasInputLeft}px` }">
            <el-input ref="canvasInput" v-model="canvasText" @blur="onBlur" @keydown.enter="onBlur">
            </el-input>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Setting, ArrowLeft, ArrowRight, Picture } from '@element-plus/icons-vue'
import { ElMessageBox } from 'element-plus'
import { ref, onMounted } from 'vue';
const canvas: any = ref(null) //画板本体
const canvasMian: any = ref(null) //画板工具栏
const canvasInput: any = ref(null)

const canvasWidth = ref(0) //画板宽
const canvasHeight = ref(0) //画板高
const lineWidth = ref(8) //线条宽
const lineColor = ref('#000000') //线条颜色
const fontWidth = ref(20) //文字大小
const fontColor = ref('#000000') //文字颜色
const canvasInputDisplay = ref('none')
const canvasText = ref('')
const canvasInputTop: any = ref(0)
const canvasInputLeft = ref(0)
const textPositionX: any = ref(0)
const textPositionY = ref(0)

let isDraw = false //是否正在绘画
const type = ref('pen')
// let arr = []
// const path = new Path2D()

let ctx: any; //canvas上下文
onMounted(() => {
    canvasWidth.value = canvasMian.value.clientWidth
    canvasHeight.value = canvasMian.value.clientHeight
    ctx = canvas.value.getContext('2d')
    ctx.lineCap = "round";
    console.log(ctx)
    setTimeout(() => {
        drawCircular(75)
    }, 0);

})

const drawCircular = (num: number) => {
    ctx.moveTo(300, 300)
    let count = 0
    let a = 1.5 * Math.PI
    ctx.lineCap = "round";
    ctx.lineWidth = 16
    const x = setInterval(() => {
        count++
        ctx.strokeStyle = '#409eff'
        ctx.fillStyle = '#409eff'
        ctx.lineWidth = '20px'
        ctx.clearRect(250, 250, 300, 300)
        ctx.beginPath()
        a += ((num / 100) * 2 * Math.PI) / 1000
        ctx.arc(400, 400, 100, 1.5 * Math.PI, a, false)
        ctx.stroke()
        ctx.closePath()
        // ctx.beginPath()
        // ctx.arc(400, 400, 95, 1.5 * Math.PI, a, false)
        // ctx.stroke()
        // ctx.closePath()
        ctx.font = `30px Arial`
        ctx.fillText(`${parseInt(`${(count * num / 10) / 100}`)}%`, 375, 412)
        if (count == 1000) {
            clearInterval(x)
        }
    }, 1)
}

const onBlur = () => {
    ctx.restore()
    ctx.font = `${fontWidth.value}px Arial`
    ctx.fillStyle = fontColor.value
    ctx.fillText(canvasText.value, textPositionX.value, textPositionY.value + fontWidth.value)
    ctx.fillStyle = lineColor.value
    ctx.save()
    canvasInputDisplay.value = 'none'
}

const formatTooltip = (value: number) => {
    return `${value}px`
}
const beginDraw = (e: any) => {
    switch (type.value) {
        case 'pen':
            drawLine(e.offsetX, e.offsetY)
            break;
        case 'eraser':
            drawEraser(e.offsetX, e.offsetY)
            break;
        case 'text':
            drawText(e.offsetX, e.offsetY)
            break;
        case 'image':
            drawImage(e.offsetX, e.offsetY)
            break;
    }
}

const drawEraser = (x: Number, y: Number) => {
    isDraw = true
    ctx.restore()
    ctx.lineWidth = lineWidth.value
    ctx.strokeStyle = '#ffffff'
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x, y)
    ctx.stroke()
    ctx.closePath()
}

const drawText = (x: number, y: number) => {
    if (canvasInputDisplay.value == 'inline-block') return
    canvasInputDisplay.value = 'inline-block'
    setTimeout(() => {
        textPositionX.value = x
        textPositionY.value = y
        if (canvasMian.value.clientWidth > x + 150) {
            canvasInputLeft.value = x
        } else {
            canvasInputLeft.value = canvasMian.value.clientWidth - 150
        }
        if (canvasMian.value.clientHeight > y + 32) {
            canvasInputTop.value = y
        } else {
            canvasInputTop.value = canvasMian.value.clientHeight - 32
        }
        canvasText.value = ''
        canvasInput.value.focus()
    });
    // ElMessageBox.prompt('请输入文字', '提示', {}).then(({ value }: any) => {
    //     console.log(value)
    //     ctx.restore()
    //     ctx.font = `${fontWidth.value}px Arial`
    //     ctx.fillStyle = fontColor.value
    //     ctx.fillText(value, x, y + fontWidth.value)
    //     ctx.fillStyle = lineColor.value
    //     ctx.save()
    // })
}

const drawImage = (x: Number, y: Number) => {
    // console.log(x, y)
    const imageDom = document.createElement('img')
    imageDom.src = 'https://img2.baidu.com/it/u=343850545,2320437498&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1658854800&t=d69d11141154357e0db3678321d90913'
    imageDom.onload = () => {
        ctx.drawImage(imageDom, x, y)
    }
}

const drawLine = (x: Number, y: Number) => {
    isDraw = true
    ctx.restore()
    ctx.lineWidth = lineWidth.value
    ctx.strokeStyle = lineColor.value
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x, y)
    ctx.stroke()
    ctx.closePath()
}
const draw = (e: any) => {
    if (isDraw) {
        ctx.lineCap = "round";
        ctx.lineTo(e.offsetX, e.offsetY)
        ctx.save()
        ctx.stroke()
    }
}

const xxx = (e: any) => {
    [].slice.call(e.dataTransfer.files).forEach((item: any) => {
        if (item.type === "image/png") {
            let fileUrl = window.URL.createObjectURL(item)
            const imageDom = document.createElement('img')
            imageDom.src = fileUrl
            imageDom.onload = () => {
                ctx.drawImage(imageDom, e.offsetX, e.offsetY)
            }
        }
    })
}

const endDraw = () => {
    isDraw = false
}
</script>

<style lang="scss" scoped>
.canvasMian {
    width: 100%;
    position: relative;
    height: calc(100% - 68px);
    background-color: #ffffff;
    border-radius: 8px;
}

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

.setting-content {
    .grid {
        margin-top: 8px;
        display: grid;
        grid-template-columns: 80px 1fr;
        font-size: 12px;
        justify-content: center;
        align-items: center;
    }
}

.active {
    border: #409eff solid 1px;
    border-radius: 8px;
    // padding: 4px;
}

:deep(.el-input__inner) {
    width: 30px;
}

:deep(.el-slider__input) {
    width: 80px;
}

.mr8 {
    margin-left: 8px;
}

.canvas-input {
    position: absolute;
    width: 150px;
    height: 32px;
}
</style>