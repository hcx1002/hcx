<template>
    <div class="content">
        <h1 class="h1">我的信息</h1>
        <el-button @click="toTest2">去首页</el-button>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
    name: "PersonInfo",
    setup () {
        const router = useRouter()
        const toTest2= (() => {
            router.push("/")
        })
        return {
            toTest2
        }
    }
}
</script>

<style scoped lang="scss">
.content{
    width: 80%;
    margin: auto;
    .h1{
        color: red;
    }
}
</style>
