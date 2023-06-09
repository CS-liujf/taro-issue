import { Router } from 'vue-router';
import { useUserStore } from '@/store/store_modules/userInfo';

const userStore = useUserStore()

export function setBeforeEach(router: Router) {
    router.beforeEach((to, from, next) => {
        if (userStore.getLoginStatus()) {
            if (to.path === '/login')
                next({ path: '/' })
        } else {
            next({ path: '/login' })
        }
    });
}