import Vue from 'vue'
import Router from 'vue-router';

import Home from "./node_modules/@/views/Home.vue";
import Listeannonces from "./node_modules/@/views/Listeannonces.vue";
import DetailAnnonce from "./node_modules/@/views/DetailAnnonce";
import CreationAnnonce from "./node_modules/@/views/CreationAnnonce.vue";
import InscriptionPage from "./node_modules/@/views/InscriptionPage";
import ConnexionPage from "./node_modules/@/views/ConnexionPage";
import DeconnexionPage from "./node_modules/@/views/DeconnexionPage";
import ProfilPage from "./node_modules/@/views/ProfilPage.vue";
import Contact from "./node_modules/@/views/Contact.vue";
import Apropos from "./node_modules/@/views/Apropos";
import Cgv from "./node_modules/@/views/Cgv.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: Home
   },
    {
        path: '/annonces',
        name: 'annonces',
        component: Listeannonces
    },
    {
        path: '/detailannonce/:id',
        name: 'detailAnnonce',
        component: DetailAnnonce,
        props: true
    },
    {
        path: '/creationannonce',
        name: 'creationAnnonce',
        component: CreationAnnonce
    },

    {
        path: '/inscription',
        name: 'inscription',
        component: InscriptionPage
    },
    {
        path: '/connexion',
        name: 'connexion',
        component: ConnexionPage
    },
    {
        path: '/deconnexion',
        name: 'deconnexion',
        component: DeconnexionPage
    },
    {
        path: '/profil',
        name: 'profil',
        component: ProfilPage
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/apropos',
        name: 'apropos',
        component: Apropos
    },
    {
        path: '/cgv',
        name: 'cgv',
        component: Cgv
    },

    ]

})