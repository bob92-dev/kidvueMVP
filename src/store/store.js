import Vue from 'vue'
import Vuex from 'vuex'

import advert from './advert'
import user from './user'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        advert: advert,
        user: user
    }
})