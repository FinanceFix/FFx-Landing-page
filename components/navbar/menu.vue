<template>
  <div class="mt-[59px] w-[1000px] mx-auto text-[#FFFFFF] text-lg text-[24px]">
    <nav
      class="bg-[#040A21] shadow-[0_5px_60px_-10px_rgba(255,255,255,0.3)] rounded-full flex justify-evenly items-center pb-[33px] pt-[37px]"
    >
      <div class="basis-1/">
        <img
          class="inline mr-[100px]"
          src="../../image/FFx.png"
          alt="..."
          width="70px"
          height="50px"
        />
      </div>
      <div class="flex space-x-3">
        <a
          href="#"
          class="text-[#FFFFFF] font-medium text-white"
          aria-current="page"
          >À propos</a
        >
        <a href="#" class="font-medium text-[#FFFFFF] px-[24px]"
          >Fonctionnalités</a
        >
        <a href="#" class="text-[#FFFFFF] font-medium pr-[20px]">FAQ </a>
        <div class="flex justify-evenly items-center">
          <a href="#" class="rounded-md text-[#FFFFFF] font-medium">Fr </a>
          <down_arrow />
        </div>
      </div>
      <div>
        <a
          href="#"
          class="rounded-full p-4 font-bold text-[#FFFFFF] bg-gradient-to-r from-green-800 to-green-800"
          >Rejoindre la liste d'attente
        </a>
      </div>
    </nav>
  </div>
</template>

<script setup>
import down_arrow from "../icons/down_arrow.vue";
</script>

<style lang=""></style>
