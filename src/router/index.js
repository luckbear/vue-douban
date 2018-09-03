import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import PageView from '../components/views/PagesView.vue'
import HomeView from '../components/views/HomeView.vue'
import DetailView from '../components/views/DetailView.vue'
import MovieView from '../components/views/MovieView.vue'
import BookView from '../components/views/BookView.vue'
import RadioView from '../components/views/RadioView.vue'
import GroupView from '../components/views/GroupView.vue'

export default new VueRouter({
    routes: [{
            path: '/',
            redirect: '/pages'
        },
        {
            path: '/pages',
            component: PageView,
            children: [{
                    path: '',
                    redirect: '/pages/home'
                },
                {
                    path: 'home',
                    component: HomeView
                },
                {
                    path: 'detail:id',
                    component: DetailView
                },
                {
                    path: 'movie',
                    component: MovieView
                },
                {
                    path: 'book',
                    component: BookView
                },
                {
                    path: 'radio',
                    component: RadioView
                },
                {
                    path: 'group',
                    component: GroupView
                }
            ]
        },

    ]
})