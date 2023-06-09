import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// import tabBar from '@/pages/vue-router/index.vue';
// import index from '@/pages/vue-router/views/index/index.vue';
// import profile from '@/pages/vue-router/views/me/index.vue';
import tabBar from '@/pages/tabs/tabBar.vue';
import index from '@/pages/tabs/index/index.vue';
import me from '@/pages/tabs/profile/index.vue';
import { App } from 'vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: tabBar,
        redirect: '/index',
        children: [
            {
                path: 'index',
                component: index,
                // beforeEnter: (to, from, next) => {
                //     setTimeout(() => next(), 5000)
                // }
            },
            {
                path: "profile",
                component: me
            }
        ]
    },
    // query传参

];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default function setupRouter(app: App) {
    //   setBeforeEach(router)
    app.use(router);
}