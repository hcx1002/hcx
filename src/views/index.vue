<template>
    <hcx_carousel :list="carouselList" :activeCarousel="activeCarousel" @changeCarTab="changeCarTab"></hcx_carousel>
    <hcx_cards></hcx_cards>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import hcx_carousel from '@/components/hcx_carousel/index.vue'
import hcx_cards from '@/components/hcx_cards/index.vue'
import { getBanner } from "@/api/home";

export default defineComponent({
    name: 'IndexView',
    components: {
        hcx_carousel,
        hcx_cards
    },
    setup() {
        const activeCarousel = ref(0);
        const carouselList = ref({})
        const changeCarTab = (index: number) => {
            activeCarousel.value = index
        }
        getBanner().then(res => {
            console.log(res)
            carouselList.value = res
        })
        return {
            carouselList,
            activeCarousel,
            changeCarTab
        }
    }
})

</script>
<style scoped lang="scss">


</style>
