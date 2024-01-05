// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/styles/base.scss'],
  devtools: { enabled: true },
  typescript: {
    typeCheck: true
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/nuxt3-generate/' : '/',
    buildAssetsDir: '/asset/'
  }
});
