import Vue from 'vue'
import Router from 'vue-router';

import Home from "@/views/Home.vue";
import Listeannonces from "@/views/Listeannonces.vue";
import DetailAnnoncePage from "@/views/DetailAnnoncePage.vue";
import CreationAnnonce from "@/views/CreationAnnonce.vue";
import InscriptionPage from "@/views/InscriptionPage";
import ConnexionPage from "@/views/ConnexionPage";
import ProfilPage from "@/views/ProfilPage.vue";
import Contact from "@/views/Contact.vue";
import Apropos from "@/views/Apropos";
import Cgv from "@/views/Cgv.vue";

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
        component: DetailAnnoncePage,
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