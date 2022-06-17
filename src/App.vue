<template>
    <div v-wechat-title="$route.meta.title">
        <el-row>
            <el-col :xs="{span:24}" :sm="{span:20,offset:2}" :md="{span:18,offset:3}" :lg="{span:16,offset:4}">
                <hcx_menu @handleSelect="handleSelect"></hcx_menu>
                <router-view></router-view>

            </el-col>
        </el-row>
        <hcx_footer></hcx_footer>
    </div>

</template>


<script lang="ts">
import hcx_menu from '@/components/hcx_menu/index.vue'
import hcx_footer from '@/components/hcx_footer/index.vue'
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        hcx_menu,
        hcx_footer
    },
    setup(){
        const handleSelect = (res:string[])=>{
            console.log(res)
        }
        return{
            handleSelect
        }
    }
})
</script>
<style>
@font-face {
    font-family: '幻彩希';
    src: url("assets/fonts/font.ttf");
}
*{
    margin: 0;
    padding: 0;
}
body {
    font-family: '幻彩希', serif;
}
</style>
