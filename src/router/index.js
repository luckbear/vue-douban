import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import pageView from '../views/PageView.vue'

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/page'
        },
        {
            path: '/page',
            component: pageView
        }
    ]
})