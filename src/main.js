import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

const firebaseConfig = {
    apiKey: "AIzaSyBkQlrXVX1ZMP4ynr-lXHOPYzlxuslzewo",
    authDomain: "kidvuemvp.firebaseapp.com",
    databaseURL: "https://kidvuemvp.firebaseio.com/",
    projectId: "kidvuemvp",
    storageBucket: "kidvuemvp.appspot.com",
    messagingSenderId: "8208204539",
    appId: "1:8208204539:web:ab248e19d14797e935265e",
    measurementId: "G-WXW80KT5WX"
};
firebase.initializeApp(firebaseConfig);

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");