<script lang="ts">
import { useUserStore } from '@/stores/user'
export default {
  name: 'settings',
  data() {
    return {
      userStore: useUserStore(),
      isShowingAPIToken: ref(false)
    }
  },
  computed: {
    apiTokenInputType() {
      return this.isShowingAPIToken == false ? 'password' : 'text'
    },
    apiTokenInputIcon() {
      return this.isShowingAPIToken == false ? 'gg-eye' : 'gg:eye-alt'
    }
  },
  methods: {
    toggleAPITokenInputType() {
      if (this.isShowingAPIToken) { this.isShowingAPIToken = false } else { this.isShowingAPIToken = true }
    }
  }
}
</script>

<template>
  <div class="flex flex-col gap-4 h-full w-dvw justify-center items-center">

  </div>
</template>