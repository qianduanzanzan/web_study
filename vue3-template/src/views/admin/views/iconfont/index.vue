<template>
    <div class="container">
        <div class="grid p-10">
            <div class="b" v-for="item in a" :key="item">
                <svg-icon class="m-20" style="font-size: 60px" :iconName="item"></svg-icon>
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
const a = [
    "icon-xuegao",
    "icon-kele",
    "icon-baomihua",
    "icon-tianfuluo",
    "icon-paomian",
    "icon-shousi",
    "icon-doufu",
    "icon-zhouzi",
    "icon-suannai",
    "icon-pisa",
    "icon-tongluoshao",
    "icon-nuomici",
    'icon-roujiamo',
    'icon-zhangyuxiaowanzi',
    'icon-chengzhi',
    'icon-hebaodan',
    'icon-bingtanghulu',
    'icon-qianceng',
    'icon-shengjian',
    'icon-youtiao',
    'icon-yuzijiang',
    'icon-zhutongfan',
    'icon-doujiang',
    'icon-sanmingzhi',
    'icon-paofu',
    'icon-dangaojuan',
    'icon-danta',
    'icon-xiangcaobingqilin',
    'icon-jiaozi',
    'icon-tilamisu',
    'icon-huoguo',
    'icon-hongshu',
    'icon-mianhuatang',
    'icon-jiroujuan',
    'icon-guodong',
    'icon-kafei'
]

</script>

<style lang="scss" scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
}

.b {
    border: 1px solid #cccccc;
    text-align: center;
}

.container {
    background: #ffffff;
    height: 100%;
}
</style>
