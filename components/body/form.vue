
<template>
  <div class="flex w-full max-w-sm items-center gap-1.5 relative">
    <Input id="email" type="email" placeholder="Email" />
    <Button
      type="submit"
      class="bg-[#009645] rounded-[23px] absolute h-[40px] -right-0 mr-[3px]"
    >
      Soumettre
    </Button>
  </div>
</template>
<script setup lang="ts">
import { Input } from "@/components/ui/input";
</script>
