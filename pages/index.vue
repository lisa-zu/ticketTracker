<script lang="ts">
import { useUserStore } from '@/stores/user'
export default {
  name: 'index',
  setup() {
    definePageMeta({
      layout: false
    })
  },
  data() {
    return {
      userStore: useUserStore(),
    }
  },
  methods: {
    async configureApp() {
      // configure the app
      // 1. create user session id
      await $fetch('/api/oauth/state')
          .then(res => {
            // 2. save session id to pinia user store
            this.userStore.setUserSessionId(res.sessionId)
            // 3. redirect to jira auth with session id
            navigateTo(res.authUrl, {
              open: {
                target: '_top',
                windowFeatures: {
                  width: 500,
                  height: 500
                }
              }
            })
          })
    }
  },
}
</script>

<template>
  <div class="flex w-dvw h-dvh justify-center items-center">
    <UButton
        icon="logos:jira"
        size="lg"
        @click="configureApp"
    >
      Anmelden
    </UButton>
  </div>
</template>