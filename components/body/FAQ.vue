<template>
  <div class="w-full flex justify-center items-center">
    <div
      class="grid lg:grid-cols-2 md:grid-row gris-cols-2 gap-10 w-[80%] max-w-[1300px] h-[500px]"
    >
      <div
        class="flex flex-col gap-8 lg:items-start md:items-center items-center text-center md:text-center lg:text-left"
      >
        <span
          class="lg:text-6xl md:text-5xl text-3xl font-bold font-primary w-[70%]"
        >
          Foire aux
          <span>questions</span>
        </span>
        <span
          class="md:text-lg text-base font-secondary md:text-center lg:text-left"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          atque deleniti distinctio dolorum earum eum harum id, ipsam magni
          molestias nihil nisi porro quaerat ratione sunt suscipit tempora
          tenetur unde.
        </span>
      </div>
      <div>
        <Accordion
          type="single"
          class="w-full"
          collapsible
          :default-value="defaultValue"
        >
          <AccordionPanel
            v-for="item in accordionItems"
            :key="item.value"
            :value="item.value"
          >
            <AccordionHeader class="font-primary md:text-xl text-base">{{
              item.title
            }}</AccordionHeader>
            <AccordionContent class="md:text-lg text-sm font-secondary">
              {{ item.content }}
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
    </div>
  </div>
  <div class="relative">
    <!-- <div
      class="absolute blur-[100px] -z-20 -right-96 opacity-80 -top-64 w-[38rem] h-[38rem] bg-green-600 rounded-full"
    ></div> -->
  </div>
</template>
<script setup lang="ts">
import SubmitForm from "./form.vue";
import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";
const defaultValue = "item-1";

const accordionItems = [
  {
    value: "item-1",
    title: "Is it accessible?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium deleniti dolores est et excepturi expedita illo ipsa libero neque nobis non nulla quo ratione, sunt, unde ut. Laboriosam, sunt!\n",
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
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium deleniti dolores est et excepturi expedita illo ipsa libero neque nobis non nulla quo ratione, sunt, unde ut. Laboriosam, sunt!\n",
  },
  {
    value: "item-3",
    title: "Can it be animated?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium deleniti dolores est et excepturi expedita illo ipsa libero neque nobis non nulla quo ratione, sunt, unde ut. Laboriosam, sunt!\n",
  },
  {
    value: "item-3",
    title: "Can it be animated?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium deleniti dolores est et excepturi expedita illo ipsa libero neque nobis non nulla quo ratione, sunt, unde ut. Laboriosam, sunt!\n",
  },
];
</script>
