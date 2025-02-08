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
    <UFormGroup
      class="w-2/4"
      label="Jira Hostname"
      required
    >
      <div class="flex flex-row w-full gap-4">
        <UInput class="flex-1"
                color="white"
                variant="outline"
                v-model="userStore.jiraHostName"
                size="lg"
        ></UInput>
      </div>
    </UFormGroup>
    <UFormGroup
        class="w-2/4"
        label="Jira E-Mail-Adresse"
        required
    >
      <div class="flex flex-row w-full gap-4">
        <UInput class="flex-1"
                color="white"
                variant="outline"
                v-model="userStore.jiraUserEmailAddress"
                size="lg"
        ></UInput>
      </div>
    </UFormGroup>
    <UFormGroup
        class="w-2/4"
        label="Jira API Token"
        required
    >
      <div class="flex flex-row w-full gap-4">
        <UInput class="flex-1"
                color="white"
                variant="outline"
                :type="apiTokenInputType"
                v-model="userStore.jiraUserAPIToken"
                size="lg"
                :ui="{ icon: { trailing: { pointer: '' } } }"
        >
          <template #trailing>
            <UButton
                :icon="apiTokenInputIcon"
                size="sm"
                color="primary"
                square
                variant="ghost"
                @click="toggleAPITokenInputType()"
            />
          </template>
        </UInput>
      </div>
    </UFormGroup>
  </div>
</template>