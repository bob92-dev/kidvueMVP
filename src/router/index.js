import Vue from 'vue'
import Router from 'vue-router'
import adverts from "@/components/advert/adverts";
import createAdvert from "@/components/advert/createAdvert";
import advert from "@/components/advert/advert";
/* import Inscription from "@/views/Inscription.vue";
import Connexion from "@/views/Connexion.vue"; */
import Deconnexion from "@/views/Deconnexion.vue";
import signUp from '@/components/user/signUp';
import signIn from '@/components/user/signIn';

import Profil from "@/views/Profil.vue"

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/annonces',
            name: 'annonces',
            component: adverts
        },
        {
            path: '/creationannonce',
            name: 'creationannonce',
            component: createAdvert
        },
        {
            path: '/annonces/:id',
            name: 'detail-annonce',
            props: true,
            component: advert
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
    ]

})