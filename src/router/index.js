import Vue from 'vue'
import Router from 'vue-router';

import Home from "@/views/Home.vue";
import Listeannonces from "@/views/Listeannonces.vue";
import DetailAnnoncePage from "@/views/DetailAnnoncePage";
import CreationAnnonce from "@/views/CreationAnnonce.vue";
import InscriptionPage from "@/views/InscriptionPage";
import ConnexionPage from "@/views/ConnexionPage";
import EditerProfil from "@/views/ProfilPage";
import Contact from "@/views/Contact.vue";
import Apropos from "@/views/Apropos";
import Cgv from "@/views/Cgv.vue";
import Nous from "@/views/Nous.vue";
import PageErreur from "@/views/PageErreur";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/annonces/:categorie',
            name: 'annonces',
            component: Listeannonces,
            props: true
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
            component: EditerProfil
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
        {
            path: '/nous',
            name: 'nous',
            component: Nous
        },
        {
            path: '/404',
            name: '404',
            component: PageErreur,
        },

        {
            path: '*',
            redirect: { name: '404' }
        }


    ]

})