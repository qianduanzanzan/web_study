<template>
    <el-dialog center v-model="dialogVisible" :title="title" width="400px">
        <el-form :model="formData" label-width="80px">
            <el-form-item label="名称">
                <el-input v-model="formData.title" />
            </el-form-item>
            <el-form-item label="内容">
                <el-input :rows="8" type="textarea" v-model="formData.content" />
            </el-form-item>
            <el-form-item label="日期">
                <!-- <el-date-picker style="width: 100%" v-model="formData.createdTime" type="date"
                    value-format="YYYY-MM-DD"> -->
                <el-date-picker style="width: 100%" v-model="formData.createdTime" type="date" placeholder="Pick a Date"
                    value-format="YYYY-MM-DD" />
            </el-form-item>
        </el-form>
        <div style="text-align: center" slot="footer">
            <el-button @click="save">保存</el-button>
        </div>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref, defineExpose } from 'vue';
import { addNew, editNew } from '@/api/mock'
let dialogVisible = ref(false)
let title = ref('')
let formData = ref({
    title: '',
    content: '',
    createdTime: '',
    id: ''
})
const open = (data: any) => {
    if (data.id) {
        title.value = '编辑'
        formData.value = JSON.parse(JSON.stringify(data))
    } else {
        formData.value = {
            title: '',
            content: '',
            createdTime: '',
            id: ''
        }
        title.value = '新增'
    }
    dialogVisible.value = true
}

const emits = defineEmits(['success'])

const save = () => {
    if (formData.value.id) {
        editNew(formData.value).then(() => {
            emits('success')
            dialogVisible.value = false
        })
    } else {
        addNew(formData.value).then(() => {
            emits('success')
            dialogVisible.value = false
        })
    }
}

defineExpose({
    open
})
</script>