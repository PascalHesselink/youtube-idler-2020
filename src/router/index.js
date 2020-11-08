import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path      : '/',
        name      : 'home',
        component : Home
    },
    {
        path      : '/shop',
        name      : 'shop',
        component : () => import(/* webpackChunkName: "shop" */ '../views/Shop.vue')
    },
    {
        path      : '/achievements',
        name      : 'achievements',
        component : () => import(/* webpackChunkName: "achievements" */ '../views/Achievements.vue')
    },
    {
        path      : '/settings',
        name      : 'settings',
        component : () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue')
    }
]

const router = createRouter({
    history : createWebHashHistory(),
    routes
})

export default router
