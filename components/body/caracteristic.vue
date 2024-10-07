
<template>
  <Tabs  class="flex justify-center items-center "  v-model:value="activeAccordion">

  <div class="flex justify-center items-center  max-w-[1200px] ">
    <div class=" grid grid-cols-2">
      <div class="flex flex-col  gap-8">
        <div class="flex flex-col">
          <span class="font-bold font-primary my-4  text-7xl">
            Suivre votre patrimoine
          </span>

        </div>
  <div class="max-w-[500px] ">
    <span class=" font-secondary  text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque deleniti dicta ea earum eius error explicabo, fugit id iste magnam magni molestias provident quam qui recusandae totam unde voluptatum.
          </span>
  </div>

        <div class=" w-full flex">
          <Accordion v-model:value="activeAccordion">

         <TabList  >
<!--           <Tab value="1">-->

             <div class=" flex  flex-col gap-6">

             <div  @click="switchActive(tab.value)" v-for="tab in elements" :class="['bg-[#142032] border-2 border-[#172a45] shadow-inner rounded-lg  ', activeAccordion === tab.value ? 'shadow-2xl': '']">
               <div v-if="activeAccordion === tab.value" class="w-full  h-1 rounded-lg overflow-hidden ">
                 <div
                     class="bg-gradient-to-r from-green-500 to-indigo-500 h-full transition-all duration-100 ease-linear"
                     :style="{ width: progress + '%' }"
                 ></div>
               </div>
               <AccordionPanel  :pt="{
                 root: 'border-none cursor-pointer',
               }"   :value="tab.value">
                 <!-- Progress Bar -->

                 <AccordionHeader :pt="{
                    toggleIcon: '!hidden'
                  }" :merge-options="true" class="font-primary text-xl">{{ tab.header }}</AccordionHeader>
                 <AccordionContent  >
                   <p class=" font-secondary">
                     {{tab.description}}
                   </p>
                 </AccordionContent>

               </AccordionPanel>
             </div>

             </div>
<!--           </Tab>-->

<!--           <Tab value="2">Header III</Tab>-->
         </TabList>
       </Accordion>
        </div>

      </div>

      <div class=" p-4 flex justify-center items-center">
       <div class="text-[#142032] !bg-white  h-[90%] rounded-3xl shadow-2xl">
         <TabPanels>
           <TabPanel value="0">
             <p class="m-0">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
               consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
             </p>
           </TabPanel>
           <TabPanel value="1">
             <p class="m-0">
               Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
               ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
             </p>
           </TabPanel>
           <TabPanel value="2">
             <p class="m-0">
               At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
               qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
             </p>
           </TabPanel>
         </TabPanels>
       </div>
      </div>
    </div>

  </div>
  </Tabs>
</template>
<script setup lang="ts">

import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

const {t} = useI18n({
  useScope: 'local'
})

const  activeAccordion = ref('0')
const progress = ref(0) // Progress percentage
const switchInterval = 20000 // 2 seconds to switch accordions
const updateInterval = 100
const elements = [
  {
    header: 'Something 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem consequuntur enim iusto libero, maiores minima molestiae quidem reiciendis reprehenderit totam ut, voluptatibus! Cum excepturi impedit minus sed tenetur veritatis?\n',
    value: '0'
  },
  {
    header: 'Something 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem consequuntur enim iusto libero, maiores minima molestiae quidem reiciendis reprehenderit totam ut, voluptatibus! Cum excepturi impedit minus sed tenetur veritatis?\n',
    value: '1'
  },
  {
    header: 'Something 3',
    description: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem consequuntur enim iusto libero, maiores minima molestiae quidem reiciendis reprehenderit totam ut, voluptatibus! Cum excepturi impedit minus sed tenetur veritatis?\n',
    value: '2'
  }
]

const switchActive = (value: string) => {
  progress.value = 0
  activeAccordion.value = value;
}
const switchElementAutomatically = () => {
  let currentIndex = 0
  let progressValue = 0

  // Update progress and switch to the next accordion
  setInterval(() => {
    // Increment the progress percentage
    progressValue += (updateInterval / switchInterval) * 100
    progress.value = Math.min(progressValue, 100) // Ensure it doesn't go beyond 100%

    // If the progress reaches 100, switch to the next accordion
    if (progress.value >= 100) {
      // Reset progress
      progressValue = 0
      progress.value = 0

      // Set the active accordion
      activeAccordion.value = String(currentIndex)

      // Move to the next accordion or reset to 0 if at the end
      if (currentIndex < elements.length - 1) {
        currentIndex++
      } else {
        currentIndex = 0 // Restart from the first element
      }
    }
  }, updateInterval) // Update progress every 100ms
}

onMounted(() => {
  switchElementAutomatically()
})
</script>

<style scoped></style>

<i18n>
</i18n>
