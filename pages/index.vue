<script lang="ts">
import { useUserStore } from '@/stores/user'
export default {
  name: 'index',
  setup() {
    definePageMeta({
      layout: false
    })
  },
  created() {
    this.configureApp()
  },
  data() {
    return {
      userStore: useUserStore(),
    }
  },
  methods: {
    configureApp() {
      // configure the app
      // 1. create user session id
      // 2. login with jira
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