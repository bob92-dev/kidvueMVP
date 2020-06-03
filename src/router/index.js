import Vue from 'vue'
import Router from 'vue-router'
import Listeannonces from "@/views/Listeannonces.vue";
import Uploader from "@/views/Uploader.vue";
import DetailAnnonce from "@/views/DetailAnnonce.vue";
import Inscription from "@/views/Inscription.vue";
import Connexion from "@/views/Connexion.vue";
import Deconnexion from "@/views/Deconnexion.vue";
import Profil from "@/views/Profil.vue"

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
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
            component: Inscription
        },
        {
            path: '/connexion',
            name: 'connexion',
            component: Connexion
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