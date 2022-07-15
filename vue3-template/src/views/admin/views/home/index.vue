<script lang="ts" setup>
import { onMounted } from 'vue';
import store from '@/store';
import * as echarts from 'echarts';
import { storeToRefs } from 'pinia'
import test from './test.vue'

const useStores: any = storeToRefs(store.test())

onMounted(() => {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('charts1') as HTMLElement);

    // 绘制图表
    myChart.setOption({
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
            {
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }
        ]
    });
})

</script>

<template>
    <div>
        <div style="width: 300px;height: 300px" id="charts1"></div>
    </div>
    {{ useStores.count }}
    {{ useStores.name }}
    {{ useStores.xxx }}
    <div>
        <test />
    </div>
</template>