<template>
    <!-- 模拟表格增删改查 -->
    <el-card>
        <div>
            <el-button @click="open()">新增</el-button>
        </div>
        <div class="flex a-c">
            <span>名称</span>
            <el-input style="width: 200px" v-model="searchData.title"></el-input>
            <span>内容</span>
            <el-input style="width: 200px" v-model="searchData.content"></el-input>
            <el-button @click="getNewsList">搜索</el-button>
            <el-button @click="reset">重置</el-button>
        </div>
        <el-table border height="730" :data="tableData" style="width: 100%">
            <el-table-column prop="title" label="名称" />
            <el-table-column min-width="200" prop="content" label="内容" />
            <el-table-column prop="createdTime" label="日期" />
            <el-table-column label="操作">
                <template #default="{ row }">
                    <el-button @click="delData(row.id)">删除</el-button>
                    <el-button @click="open(row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
    <edit-dialog ref="editDialogRef" @success="getNewsList" />
</template>

<script lang="ts" setup>
import { getNewsList as getList, addNew, editNew, delNew } from '@/api/mock'
import { ref } from 'vue';
import { ElMessage } from 'element-plus'
import editDialog from './components/editDialog.vue'
let tableData = ref([])
let searchData = ref({
    title: '',
    content: ''
})
const getNewsList = () => getList(searchData.value).then(res => {
    tableData.value = res.data
})

const editDialogRef: any = ref(null)

const open = (data: any = {}) => {
    editDialogRef.value.open(data)
}

const delData = (id: any) => delNew(id).then(res => {
    ElMessage({
        type: 'success',
        message: '删除成功'
    })
    getNewsList()
})

const reset = () => {
    searchData.value.title = ''
    searchData.value.content = ''
    getNewsList()
}

getNewsList()
</script>
