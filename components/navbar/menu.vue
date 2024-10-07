<template>
<div class="  ">
  <div class="w-full z-[10000]  ">
    <div
        class="border-b-2 border-[#172a45]   flex justify-around items-center  px-4 py-5"
    >
      <div>
        <span class="font-primary text-3xl font-bold"><span class="text-green-500">F</span>inance<span class="text-green-500">F</span>ix</span>
      </div>
      <div class=" flex gap-7 justify-center items-center ">
        <div class="flex gap-5">

          <NuxtLink v-for="(link, index) of menuLinks" :to="link.linkTo" :key="index">
            <span class="text-white text-xl font-primary cursor-pointer font-extrabold">{{link.name}}</span>
          </NuxtLink>

          <div class="flex justify-evenly items-center">
            <NuxtLink v-for="locale in availableLocales" class="cursor-pointer" :key="locale.code" :to="switchLocalePath(locale.code)">
              <span class="text-xl font-extrabold font-primary uppercase"> {{ locale.name }}</span>
            </NuxtLink>
          </div>
        </div>

        <CTA :text="$t('shared.jointhewaitinglist')" show-icon></CTA>

      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
const {t: $t, locale, locales}  = useI18n({
  useScope: 'global'
})
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

const menuLinks = ref([
  {
    name: $t('shared.aboutus'),
    linkTo: '#about-us'
  },  {
    name: $t('shared.features'),
    linkTo: '#features'
  },  {
    name: $t('shared.faq'),
    linkTo: '#faq'
  }
])
</script>

<style>
.custom-gradient  {
  background: linear-gradient(90deg, #00DD64 0%, #007736 100%);

}
</style>
