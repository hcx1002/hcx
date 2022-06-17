<template>
    <div>
        <el-affix>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
                     @select="handleSelect"
                     :router="true"
            >
                <el-menu-item index="0" disabled style="color: #007fee;font-size: 20px">
                    HCX
                </el-menu-item>
                <el-menu-item index="1" route="/">主页</el-menu-item>
                <el-menu-item index="2" route="/">功能</el-menu-item>
                <el-menu-item index="3" route="/">我的</el-menu-item>
                <div class="flex-grow"/>
                <!--右边按钮-->
                <el-menu-item index="4" route="/login">登录</el-menu-item>
            </el-menu>
        </el-affix>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "HcxMenu",
    setup(props,content) {
        const activeIndex = ref('1')
        const handleSelect = (key: string, keyPath: string[]) => {
            console.log(key, keyPath)
            content.emit('handleSelect',keyPath)
            activeIndex.value = key
        }
        return {
            activeIndex,
            handleSelect
        }
    }
})
</script>

<style scoped>
.flex-grow {
    flex-grow: 1;
}
</style>
