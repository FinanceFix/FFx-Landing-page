<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    :class="
      cn(
        'rounded-[40px] border bg-card text-card-foreground shadow-sm h-[450px] bg-[#142032]',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
