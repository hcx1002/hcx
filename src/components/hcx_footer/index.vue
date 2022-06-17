<template>
    <el-footer style="display: flex;justify-content: center;align-items: center;background-color: #eee;color: #8f8f8f">
        <div>Copyright ©
            2021-2022 <strong>{{author}}</strong> 2846579.club All Rights Reserved. 备案号：闽ICP备2021019291号-1
        </div>
    </el-footer>
</template>
<script lang="ts" setup>
import {defineComponent} from "vue";
defineComponent({
    name:'HcxFooter'
})
const author = '幻彩希'
</script>

<style scoped>

</style>
