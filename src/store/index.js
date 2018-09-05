import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import activity from './modules/activity'
import movie from './modules/movie'
import book from './modules/book'

export default new Vuex.Store({
    modules: {
        activity,
        movie,
        book
    }
})