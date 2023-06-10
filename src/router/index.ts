import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import layout from '@/pages/vue-router/index.vue';
import index from '@/pages/vue-router/views/index/index.vue';
import me from '@/pages/vue-router/views/me/index.vue';
import { App } from 'vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: layout,
        redirect: '/index',
        children: [
            {
                path: 'index',
                component: index,
            },
            {
                path: "me",
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