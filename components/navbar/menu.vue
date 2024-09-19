<template>
<div class="flex justify-center items-center py-10 ">
  <div class="w-[70%] max-w-[1195px] fixed top-10 z-[10000]">
    <div
        class="bg-primary-0  rounded-full flex justify-between items-center px-4 py-5"
    >
      <div class="pl-5 ">
        <nuxt-img
            src="./img/FFx.png"
            width="70px"
            height="50px"
        />
      </div>
      <div class="flex gap-5  ">

        <NuxtLink v-for="(link, index) of menuLinks" :to="link.linkTo" :key="index">
          <span class="text-white text-xl font-primary cursor-pointer font-extrabold">{{link.name}}</span>
        </NuxtLink>

        <div class="flex justify-evenly items-center">
          <NuxtLink v-for="locale in availableLocales" class="cursor-pointer" :key="locale.code" :to="switchLocalePath(locale.code)">
           <span class="text-xl font-extrabold font-primary uppercase"> {{ locale.name }}</span>
          </NuxtLink>
        </div>
      </div>
      <div class="">
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
