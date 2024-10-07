<script setup lang="ts">
import Navbar from "@/components/navbar/menu.vue";
import Description from "@/components/body/description.vue";
import Caracteristic from "@/components/body/caracteristic.vue";
import Features from "@/components/body/features.vue";
import FAQs from "@/components/body/FAQ.vue";
import foot from "@/components/navbar/footer.vue";
</script>

<template>
    <Navbar />

  <main class="flex flex-col gap-60">
    <Description />
    <Caracteristic />
    <Features />
    <FAQs />
  </main>

    <foot />
</template>

<style scoped>

</style>
