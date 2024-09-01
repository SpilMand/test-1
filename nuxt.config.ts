// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/styles/main.scss'],
  components: {
    global: true,
    dirs: ['~/components/sections', '~/components/molecules', '~/components/atoms'],
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
