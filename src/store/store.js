import Vue from 'vue'
import Vuex from 'vuex'
import AnnonceService from '@/services/AnnonceService.js'
import * as firebase from 'firebase'


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
        },
        createAnnonce({ commit, getters }, payload) {
            const annonce = {
                titre: payload.titre,
                categorie: payload.categories,
                organizer: payload.pseudo,
                description: payload.description,
                ville: payload.ville,
                date: payload.date,
                prix: payload.prix,
                photo: payload.imageData.name,
                creatorId: getters.user.id
            }
            firebase.database().ref('annonces').push(annonce)
                .then((data) => {
                    const key = data.key
                    commit('createAnnonce', {
                        ...annonce,
                        id: key
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
            // Reach out to firebase and store it
        },
    },

    getters: {

        user(state) {
            return state.user
        },






    }

})
