import path from "node:path";

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@hebilicious/vue-query-nuxt',
      '@primevue/nuxt-module'
  ],
  primevue: {
    options: {
      unstyled: true
    },
    importPT:  {
      from:  '~/presets/financefix'
    },
    components: {
      include:  ['Tabs', 'TabList', 'Tab', 'TabPanels', 'TabPanel', 'Accordion', 'AccordionTab', 'AccordionPanel', 'AccordionHeader', 'AccordionContent']
    }
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'En',
        file: 'lang/en.json',
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        name: 'Fr',
        file: 'lang/fr.json',
      }
    ],
    defaultLocale: 'en',
    customRoutes: 'config',
    pages: {
      index: {
        en: '/',
        fr: '/'
      }
    },
    // Browser language detection
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    },
  },
  runtimeConfig: {
    fiderApiKey: process.env.FIDER_API_KEY,
      public: {
        fiderUrl: process.env.FIDER_URL,
      }
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },

  compatibilityDate: '2024-09-10'
})
