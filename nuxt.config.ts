import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import Components from 'unplugin-vue-components/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'unplugin-icons/nuxt', '@pinia/nuxt'],
  vite: {
    plugins: [
      Components({
        resolvers: [
          IconsResolver({
            prefix: 'Icon'
          })
        ]
      }),
      Icons({})
    ]
  },
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
