import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        userSessionId: ''
    }),
    actions: {
        setUserSessionId(sessionId: string) {
            this.userSessionId = sessionId
        }
    },
    persist: true
})