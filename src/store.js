import Vue from 'vue'
import Vuex from 'vuex'
import AnnonceService from  '@/services/AnnonceService.js'


Vue.use(Vuex)

export default new Vuex.Store({
    state:{ 
        user: {id : 123, name: 'babar'},
        categories : ['Lit parapluie', 'siége auto', 'babycook', 'jouets de plage'],
        annonces: []
    },
    mutations: {
        ADD_ANNONCE(state, annonce){
            state.annonces.push(annonce)
        }
    },
    actions: {
        creationAnnonce({ commit }, annonce){
          AnnonceService.postAnnonce(annonce)  
          commit('ADD_ANNONCE', annonce)      
        }

    },
    getters: {
        catLength: state => {
            return state.categories.length
        }
    }
})
