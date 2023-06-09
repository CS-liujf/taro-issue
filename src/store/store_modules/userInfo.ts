import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        token: '',
        userRoles: [] as String[],
    }),
    actions: {
        loginHandler(token: string, userRoles: String[]) {
            this.token = token;
            this.userRoles = userRoles;
        },
        getLoginStatus() {
            return true
        }
    }
})