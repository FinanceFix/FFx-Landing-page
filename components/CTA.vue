
<template>
 <div :class="['flex gap-3 rounded-full py-4 font-primary text-lg px-10 font-extrabold cursor-pointer items-center custom-gradient shadow-inner', props.class]">
  <div>
      <span
      >
    {{props.text}}
   </span>
  </div>

   <div v-if="showIcon">
   <arrow-right></arrow-right>
   </div>
 </div>
</template>

<script setup lang="ts">
import ArrowRight from "@/components/icons/arrow-right.vue";

const props = defineProps<{
  text: string
  showIcon?: boolean
  class?: string
}>()
</script>
<style scoped>

</style>
