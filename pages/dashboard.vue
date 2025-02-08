<script lang="ts">
import { useUserStore } from '@/stores/user'
export default {
  name: 'dashboard',
  data() {
    return {
      userStore: useUserStore(),
    }
  },
}
</script>

<template>
  <div class="flex h-full w-dvw justify-center items-center">
    <h1 class="text-lg">{{userStore.jiraHostName}}</h1>
  </div>
</template>