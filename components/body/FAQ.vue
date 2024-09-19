

<template>
  <div class="w-full  flex justify-center items-center my-40">
    <div
        class="grid  grid-cols-2 gap-10 w-[70%] items-center   h-[500px]"
    >
      <div class="flex flex-col gap-5">
        <span class=" text-6xl font-bold font-primary w-[70%] ">
          Foire aux
          <span>questions</span>
        </span>
        <span class="text-lg font-secondary">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque deleniti distinctio dolorum earum eum harum id, ipsam magni molestias nihil nisi porro quaerat ratione sunt suscipit tempora tenetur unde.
        </span>
      </div>
      <div >
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
            <AccordionTrigger class="font-primary text-xl">{{ item.title }}</AccordionTrigger>
            <AccordionContent class="text-lg font-secondary">
              {{ item.content }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
<!--  <div class="relative">-->
<!--    <div-->
<!--      class="absolute blur-[100px] -z-20 -right-96 opacity-80 -top-64 w-[38rem] h-[38rem] bg-green-600 rounded-full"-->
<!--    ></div>-->

<!--    <div-->
<!--      class="w-4/5 absolute left-1/2 transform -translate-x-1/2 -top-[100px] mx-auto text-center bg-[#0077365C] py-[6px] px-[70px] rounded-[40px] h-[260px]"-->
<!--    >-->
<!--      <h2 class="text-[40px] font-bold my-[16px]">-->
<!--        Rejoindre la liste d'attente-->
<!--      </h2>-->
<!--      <p class="mb-[10px]">-->
<!--        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod-->
<!--        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim-->
<!--        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea-->
<!--        commodo consequat-->
<!--      </p>-->
<!--      <div class="flex justify-center">-->
<!--        <submitForm />-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>
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
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium deleniti dolores est et excepturi expedita illo ipsa libero neque nobis non nulla quo ratione, sunt, unde ut. Laboriosam, sunt!\n",
  },
  {
    value: "item-2",
    title: "Is it unstyled?",
    content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium deleniti dolores est et excepturi expedita illo ipsa libero neque nobis non nulla quo ratione, sunt, unde ut. Laboriosam, sunt!\n",
  },
  {
    value: "item-3",
    title: "Can it be animated?",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium deleniti dolores est et excepturi expedita illo ipsa libero neque nobis non nulla quo ratione, sunt, unde ut. Laboriosam, sunt!\n",
  },
  {
    value: "item-3",
    title: "Can it be animated?",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium deleniti dolores est et excepturi expedita illo ipsa libero neque nobis non nulla quo ratione, sunt, unde ut. Laboriosam, sunt!\n",
  },
  {
    value: "item-3",
    title: "Can it be animated?",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium deleniti dolores est et excepturi expedita illo ipsa libero neque nobis non nulla quo ratione, sunt, unde ut. Laboriosam, sunt!\n",
  },
];
</script>
