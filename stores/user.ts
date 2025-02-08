import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', {
    state: () => ({
        jiraHostName: '',
        jiraUserEmailAddress: '',
        jiraUserAPIToken: ''
    }),
    persist: {
        storage: piniaPluginPersistedstate.cookies(),
    }
})