import Vue from 'vue'
import Router from 'vue-router'
import Listeannonces from "@/views/Listeannonces.vue";
import Uploader from "@/views/Uploader.vue";
import DetailAnnonce from "@/views/DetailAnnonce.vue";
/* import Inscription from "@/views/Inscription.vue";
import Connexion from "@/views/Connexion.vue"; */
import Deconnexion from "@/views/Deconnexion.vue";
import signUp from '@/components/user/signUp.vue';
import signIn from '@/components/user/signIn.vue';

import Profil from "@/views/Profil.vue";
import Contact from "@/components/Contact.vue";
import Nous from "@/components/Nous.vue";
import Cgv from "@/components/Cgv.vue"

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'annonces',
            component: Listeannonces
        },
        {
            path: '/upload',
            name: 'uploader',
            component: Uploader
        },
        {
            path: '/detailannonce/:id',
            name: 'detail-annonce',
            component: DetailAnnonce,
            props: true
        },
        {
            path: '/inscription',
            name: 'inscription',
            component: signUp
        },
        {
            path: '/connexion',
            name: 'connexion',
            component: signIn
        },
        {
            path: '/deconnexion',
            name: 'deconnexion',
            component: Deconnexion
        },
        {
            path: '/profil',
            name: 'profil',
            component: Profil
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/nous',
            name: 'nous',
            component: Nous
        },
        {
            path: '/cgv',
            name: 'cgv',
            component: Cgv
        },
    ]

})