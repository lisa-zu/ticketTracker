// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
        '@nuxt/ui',
        '@nuxtjs/tailwindcss',
          '@pinia/nuxt',
          'pinia-plugin-persistedstate/nuxt',
          '@sidebase/nuxt-auth'
    ],
    pages: true,
    tailwindcss: {
        exposeConfig: true,
        viewer: true,
    },
    auth: {
        isEnabled: false,
        disableServerSideAuth: false,
        originEnvKey: 'AUTH_ORIGIN'
    }
})
