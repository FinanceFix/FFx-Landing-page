<template>
  <div class="mt-[147px]">
    <div class="text-center">
      <h2
        class="leading-[4.5rem] text-[64px] w-[1000px] mx-auto mb-[40px] font-bold tracking-tight text-[#FFFFFF]"
      >
        Maîtrisez Vos Finances en Toute Simplicité avec
        <span class="text-[#00DD64]">Notre Solution</span> <br />
        <span class="block text-[#00DD64] lg:inline-block"> SaaS </span>
      </h2>

      <div class="mx-auto mb-[57px] w-3/5">
        Bienvenue chez FinanceFix, votre futur outil tout-en-un pour la gestion
        simplifiée de vos finances personnelles. Que vous souhaitiez suivre vos
        dépenses, établir un budget, ou planifier vos économies, FinanceFix vous
        offre une solution intuitive et personnalisée. Finis les casse-têtes
        financiers, adoptez une approche claire et efficace pour atteindre vos
        objectifs financiers.
      </div>

      <div class="mb-[64px]">
        <button
          href="#"
          class="rounded-full mx-auto flex flex-nowrap flex-row justify-evenly px-[34px] py-[24px] font-bold text-[#FFFFFF] bg-gradient-to-r from-green-800 to-green-800"
        >
          <span class="mr-[4px] text-[22px]"
            >Rejoindre +10k d'utilisateurs</span
          >
          <arrow />
        </button>
      </div>

      <div class="relative">
        <div
          class="absolute blur-[100px] -right-96 opacity-80 -top-64 w-[38rem] h-[38rem] bg-green-600 rounded-full z-0"
        ></div>

        <img class="inline" src="../../image/exemple_saas.png" alt="..." />
      </div>
    </div>
  </div>
</template>

<script setup>
import arrow from "@/components/icons/arrow-right.vue";
</script>

<style scoped></style>
