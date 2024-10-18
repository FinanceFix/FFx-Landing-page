<template>
  <div
    :class="[
      'flex gap-3 rounded-full lg:py-4 md:py-3 py-2 font-primary lg:text-lg md:text-base text-sm lg:px-10 md:px-7 px-4 font-extrabold cursor-pointer items-center custom-gradient shadow-inner',
      props.class,
    ]"
  >
    <div>
      <span>
        {{ props.text }}
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
  text: string;
  showIcon?: boolean;
  class?: string;
}>();
</script>
<style scoped></style>
