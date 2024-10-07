

<template>
  <div class="w-full  flex justify-center items-center">
    <div
        class="grid  grid-cols-2 gap-10 w-[70%] max-w-[1200px]   h-[500px]"
    >
      <div class="flex flex-col   gap-8">
        <span class=" text-7xl  font-bold font-primary w-[70%] ">
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
          <AccordionPanel
              v-for="item in accordionItems"
              :key="item.value"
              :value="item.value"
          >
            <AccordionHeader class="font-primary text-xl">{{ item.title }}</AccordionHeader>
            <AccordionContent class="text-lg font-secondary">
              {{ item.content }}
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
    </div>
  </div>
  <div class="relative">
    <div
      class="absolute blur-[100px] -z-20 -right-96 opacity-80 -top-64 w-[38rem] h-[38rem] bg-green-600 rounded-full"
    ></div>

  </div>
</template>
<script setup lang="ts">
import SubmitForm from './form.vue'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
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
