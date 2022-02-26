<template>
    <svg 
        class="wi-icon" 
        aria-hidden="true"
        :style="{fontSize: size}">
        <use :xlink:href="symbolId" :fill="color" />
    </svg>
</template>
<script setup>
/**
 * 配置说明
 * name  [String] [Require]            : svg图像的名称，对应svg文件的名称
 * size  [String] [Default - 16px]       : svg图像的大小
 * color [String] [Default - #000000]  : svg的颜色(预先就有颜色的svg无法在定义新的颜色)
 */
import { computed } from 'vue';
const props = defineProps({
    prefix: {
        type: String,
        default: 'wi',
    },
    size:{
        type:String,
        default:16
    },
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: '#000000',
    }
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<style scoped>
.wi-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
