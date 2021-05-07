import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import( '../pages/home/Home.vue'),
        },
        {
            path: '/agent',
            name: 'agent',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( '../pages/agent/Agent.vue'),
        },
        {
            path: '/cruise',
            name: 'cruise',
            component: () => import( '../pages/cruise/Cruise.vue'),
        },
        {
            path: '/help',
            name: 'help',
            component: () => import( '../pages/help/Help.vue'),
        },
    ],
});