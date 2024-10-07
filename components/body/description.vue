<template>
  <div class="mt-[147px]   flex justify-center items-center">
    <div class="flex flex-col gap-10 items-center justify-center">
<!--      banner title -->
     <div>
       <h2
           class="font-primary text-center text-7xl max-w-[70%] mx-auto font-bold "
       >
         Maîtrisez Vos Finances en Toute Simplicité avec
         <span class="text-[#00DD64]">Notre Solution</span> <br />
         <span class="block text-[#00DD64] lg:inline-block"> SaaS </span>
       </h2>
     </div>

      <div class="text-center  flex justify-center items-center">
        <div class="font-secondary w-[50%]  text-lg ">
          <span>          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, consequuntur, debitis deleniti deserunt enim est fugiat itaque labore minus molestiae nisi quibusdam quidem reiciendis sapiente sint suscipit totam. Illum, nulla!
</span>
        </div>
      </div>
      <div>

        <CTA :text="'Rejoindre +10k d\'utilisateurs'" show-icon></CTA>
      </div>


      <div class="p-6  shadow-xl border-2 border-[#172a45] rounded-2xl">
        <nuxt-img src="/img/exemple_saas.png" class="object-cover" width="1100px" />
      </div>

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
