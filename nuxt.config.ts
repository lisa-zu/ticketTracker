// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
        '@nuxt/ui',
        '@nuxtjs/tailwindcss',
          '@pinia/nuxt',
          'pinia-plugin-persistedstate/nuxt'
    ],
    pages: true,
    tailwindcss: {
        exposeConfig: true,
        viewer: true,
    }
})
