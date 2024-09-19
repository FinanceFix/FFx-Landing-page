<template>
  <div class="mt-[147px] ">
    <div class="flex flex-col gap-10 items-center justify-center">
<!--      banner title -->
     <div>
       <h2
           class="leading-[4.5rem] font-primary text-center text-6xl w-[1000px] mx-auto font-bold tracking-tight"
       >
         Maîtrisez Vos Finances en Toute Simplicité avec
         <span class="text-[#00DD64]">Notre Solution</span> <br />
         <span class="block text-[#00DD64] lg:inline-block"> SaaS </span>
       </h2>
     </div>

      <div class="text-center w-3/5">
        <span class="font-secondary text-lg">
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, consequuntur, debitis deleniti deserunt enim est fugiat itaque labore minus molestiae nisi quibusdam quidem reiciendis sapiente sint suscipit totam. Illum, nulla!
        </span>
      </div>
      <div>

        <CTA :text="'Rejoindre +10k d\'utilisateurs'" show-icon></CTA>
      </div>
      <nuxt-img src="/img/exemple_saas.png" />

<!--      <div class="relative">-->
<!--        <div-->
<!--          class="absolute blur-[100px] -right-96 opacity-80 -top-64 w-[38rem] h-[38rem] bg-green-600 rounded-full z-0"-->
<!--        ></div>-->

<!--      </div>-->
    </div>
  </div>
</template>

<script setup lang="ts">
import CTA from "@/components/CTA.vue";
</script>

<style scoped></style>
