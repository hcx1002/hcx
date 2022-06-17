<template>
    <div style="margin-top: 20px">
        <div style="display: flex;flex-wrap: wrap;flex: 1;justify-content: space-between;">
            <el-card v-for="i in 13" :key="i" style="width: 31%;margin: 10px 0">
                <template #header>
                   <div>
                       <el-image :src="url" fit="fill" :lazy="true" />
                   </div>
                </template>
                <div v-for="o in 4" :key="o" class="text item">
                    {{ 'List item ' + o }}
                </div>
            </el-card>
        </div>
    </div>

</template>

<script>
import {ref} from "@vue/reactivity";

export default {
    name: "HcxSpace",
    setup(){
        const url = ref('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg')
        return{
            url
        }
    }
}
</script>

<style scoped>

</style>
