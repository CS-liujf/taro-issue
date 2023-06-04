import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import tabBar from '@/pages/tabs/tabBar';
import index from '@/pages/tabs/index/index';
import profile from '@/pages/tabs/profile/index'
import { App } from 'vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: tabBar,
        redirect: '/index',
        children: [
            {
                path: 'index',
                component: index
            },
            {
                path: "/profile",
                component: profile
            }]
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