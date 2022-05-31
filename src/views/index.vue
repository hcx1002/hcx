<template>
    <div>
        <h1>222222222</h1>
        <el-button @click="getData">请求</el-button>
    </div>
</template>

<script>
import {reactive} from '@vue/reactivity'
import API from "@/plugins/axiosInstance";

export default {
    name: "HomeView",
    setup() {
        const testData = reactive({
            list: []
        });
        const getData = function () {
            API({
                url:'/test',
                method:'get'
            }).then(res=>{
                console.log(res)
                testData.list = res;
            })
            // this.$axios({
            //     url: '/test',
            //     method: 'get'
            // }).then(res => {
            //     console.log(res)
            //     testData.list = res;
            // })
        }
        return {
            testData,
            getData
        }
    }
}
</script>

<style scoped>

</style>
