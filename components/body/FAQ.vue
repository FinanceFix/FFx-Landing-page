<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import submitForm from "./form.vue";

const defaultValue = "item-1";

const accordionItems = [
  {
    value: "item-1",
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    value: "item-2",
    title: "Is it unstyled?",
    content:
      "Yes. It's unstyled by default, giving you freedom over the look and feel.",
  },
  {
    value: "item-3",
    title: "Can it be animated?",
    content: "Yes! You can use the transition prop to configure the animation.",
  },
];
</script>

<template>
  <div
    class="flex flex-row justify-evenly w-2/3 mx-auto mt-[201px] pb-[70px] mb-[120px]"
  >
    <div class="basis-2/5">
      <h2 class="text-left mx-auto text-[64px] font-bold my-4 leading-[4.5rem]">
        Foire aux
        <span>questions</span>
      </h2>
      <p class="text-[20px]">
        On ne peut pas améliorer ce que l'on ne suit pas. Nous automatisons le
        suivi de votre patrimoine.
      </p>
    </div>
    <div class="basis-2/5 text-[20px]">
      <Accordion
        type="single"
        class="w-full"
        collapsible
        :default-value="defaultValue"
      >
        <AccordionItem
          v-for="item in accordionItems"
          :key="item.value"
          :value="item.value"
        >
          <AccordionTrigger>{{ item.title }}</AccordionTrigger>
          <AccordionContent>
            {{ item.content }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>

  <div class="relative">
    <div
      class="absolute blur-[100px] -z-20 -right-96 opacity-80 -top-64 w-[38rem] h-[38rem] bg-green-600 rounded-full"
    ></div>

    <div
      class="w-4/5 absolute left-1/2 transform -translate-x-1/2 -top-[100px] mx-auto text-center bg-[#0077365C] py-[6px] px-[70px] rounded-[40px] h-[260px]"
    >
      <h2 class="text-[40px] font-bold my-[16px]">
        Rejoindre la liste d'attente
      </h2>
      <p class="mb-[10px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat
      </p>
      <div class="flex justify-center">
        <submitForm />
      </div>
    </div>
  </div>
</template>
