// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],

  app: {
    head: {
      title: 'Ember & Oak — Fine Dining Nashville',
      meta: [
        { name: 'description', content: 'Wood-fired cuisine rooted in the Southern tradition, elevated with modern technique. Reserve your table at Ember & Oak, Nashville.' },
        { name: 'theme-color', content: '#1a1714' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap',
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],
})
