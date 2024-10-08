<template>
  <div
    class="flex  relative justify-center items-center bg-[#091426]  h-[400px] "
  >


    <div
        class="w-4/5 absolute left-1/2 flex flex-col justify-center gap-6 items-center  transform -translate-x-1/2 -top-40 mx-auto text-center bg-[#0077365C] py-8 rounded-[40px] "
    >
      <div>
        <span class="font-bold text-3xl font-primary">
          Rejoindre la liste d'attente
        </span>
      </div>
<div class="w-[70%]">
        <span class="font-secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat
      </span>
</div>
      <div class="flex justify-center">
        <submit-form />
      </div>
    </div>
  <div class="w-[70%] flex items-center justify-between">
    <span class="font-primary text-3xl font-bold"><span class="text-green-500">F</span>inance<span class="text-green-500">F</span>ix</span>
    <div class="flex flex-row justify-evenly">
      <linkedin />
      <instagram />
    </div>
  </div>
  </div>
</template>
<script setup>
import instagram from "../icons/instagram.vue";
import linkedin from "../icons/linkedin.vue";
import SubmitForm from "~/components/body/form.vue";
</script>
<style scoped></style>
