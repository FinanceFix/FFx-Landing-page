<template lang="">
  <header>
    <navbar />
  </header>

  <main>
    <description />
    <caracteristic />
    <features />
    <FAQs />
  </main>

  <footer>
    <foot />
  </footer>
</template>

<script setup>
import navbar from "@/components/navbar/menu.vue";
import description from "@/components/body/description.vue";
import caracteristic from "@/components/body/caracteristic.vue";
import features from "@/components/body/features.vue";
import FAQs from "@/components/body/FAQ.vue";
import foot from "@/components/navbar/footer.vue";
</script>

<style lang=""></style>
