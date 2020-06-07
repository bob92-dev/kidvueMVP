import Vue from 'vue'
import Router from 'vue-router'
import Listeannonces from "@/views/Listeannonces.vue";
import Uploader from "@/views/Uploader.vue";
import Annonce from "@/components/annonce";
/* import Inscription from "@/views/Inscription.vue";
import Connexion from "@/views/Connexion.vue"; */
//import Deconnexion from "@/views/Deconnexion.vue";
//import signUp from '@/components/user/signUp.vue';
//import signIn from '@/components/user/signIn';

import Profil from "@/views/Profil.vue";
import Contact from "@/components/Contact.vue";
import Nous from "@/components/Nous.vue";
import Cgv from "@/components/Cgv.vue";
import Home from "@/views/Home.vue";
import Login from '@/components/user/Login'
import Register from '@/components/user/Register'
import Dashboard from '@/components/user/Dashboard'



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
            path: '/upload',
            name: 'uploader',
            component: Uploader
        },
        {
            path: '/detailannonce/:id',
            name: 'detail-annonce',
            component: Annonce,
            props: true
        },
        {
            path: '/inscription',
            name: 'inscription',
            component: Register
        },
        {
            path: '/connexion',
            name: 'connexion',
            component: Login
        },
        {
            path: '/deconnexion',
            name: 'deconnexion',
            component: Dashboard
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