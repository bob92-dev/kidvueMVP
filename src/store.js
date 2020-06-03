import Vue from "vue";
import Vuex from "vuex";
import AnnonceService from "@/services/AnnonceService.js";
import FirebaseService from ""

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: "", name: "" },
    categories: ["Lit parapluie", "siége auto", "babycook", "jouets de plage"],
    annonces: []
  },
  mutations: {
    ADD_ANNONCE(state, annonce) {
      state.annonces.push(annonce);
    },
    SET_PHOTO(state, annonce) {
      state.annonces.annonce.photo = annonce.photo;
    },
    ADD_USER(state, user){
      state.user = user;
    }
  },
  actions: {
    creationAnnonce({ commit }, annonce) {
      AnnonceService.postAnnonce(annonce);
      commit("ADD_ANNONCE", annonce);
    },
    updatePhoto({ commit }, annonce) {
      commit("SET_PHOTO", annonce);
    },
    creationUser({ commit }, user){
    
    commit('ADD_USER', user)
    },
 }
});
