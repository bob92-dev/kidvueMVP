import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";
import store from '@/store/store';
import vuetify from '@/plugins/vuetify'


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
    created(){
        firebase.initializeApp({
    apiKey: "AIzaSyBkQlrXVX1ZMP4ynr-lXHOPYzlxuslzewo",
    authDomain: "kidvuemvp.firebaseapp.com",
    databaseURL: "https://kidvuemvp.firebaseio.com/",
    projectId: "kidvuemvp",
    storageBucket: "kidvuemvp.appspot.com",
    messagingSenderId: "8208204539",
    appId: "1:8208204539:web:ab248e19d14797e935265e",
    measurementId: "G-WXW80KT5WX"
        })
 },
 
}).$mount("#app");

firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
  });