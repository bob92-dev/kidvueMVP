import Vue from 'vue'
import Vuex from 'vuex'
import AnnonceService from '@/services/AnnonceService.js'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: { id: 123, name: 'babar' },
        categories: ['Lit parapluie', 'siége auto', 'babycook', 'jouets de plage'],
        annonces: []
    },
    mutations: {
        ADD_ANNONCE(state, annonce) {
            state.annonces.push(annonce)
        },
        SET_PHOTO(state, annonce) {
            state.annonces.annonce.photo = annonce.photo
        }
    },

    actions: {
        creationAnnonce({ commit }, annonce) {
            AnnonceService.postAnnonce(annonce)
            commit('ADD_ANNONCE', annonce)
        },
        updatePhoto({ commit }, annonce) {
            commit('SET_PHOTO', annonce)
            }
    }
    
})
