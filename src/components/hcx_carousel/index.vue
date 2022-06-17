<template>
    <div style="position: relative">
        <el-carousel height="300px" @change="changeCarousel" ref="carousel" arrow="never">

            <el-carousel-item v-for="(item1,index1) in list" :key="index1">
                <img :src="item1.image" :alt="item1.title" style="width: 100%;height: 100%" />
            </el-carousel-item>
            <div style="display: flex;flex-direction: column;position: absolute;top: 0;left: 0;height: 100%;z-index: 2;opacity: 0.4">
                <div v-for="(item,index) in list" :key="index"
                     style="flex: 1;padding: 20px;justify-content: center;align-items: center;display: flex; cursor: pointer"
                     class="bg_old"
                     :class="{bg:activeCarousel===index}" @click="changeCarTab(index)">
                    <div style="word-break: break-all">{{ item.title }}</div>
                </div>
            </div>
        </el-carousel>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
interface bannerObj {
    id:string,
    title:string,
    image:string
}
export default defineComponent({
    name: "HcxCarousel",
    props: {
        list: {
            type: Object as PropType<Array<bannerObj>>,
            default: () => {
            }
        },
        activeCarousel: {
            type: Number,
            default: 0
        }
    },
    //vue数据传递是单向数据流，子组件没有权利修改父组件传过来的数据
    setup(props, context) {
        const carousel = ref<any>(null)
        const changeCarTab = (index: number) => {
            carousel.value.setActiveItem(index)
            context.emit('changeCarTab', index)
        }
        const changeCarousel = (res: number) => {
            context.emit('changeCarTab', res)
        }
        return {
            carousel,
            changeCarTab,
            changeCarousel

        }
    }
})
</script>

<style scoped>
.bg_old {
    background-color: #fffafa
}

.bg {
    background-color: #99a9bf;
    transition: all 0.5s;
}

</style>
