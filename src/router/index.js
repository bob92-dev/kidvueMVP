import Vue from 'vue'
import Router from 'vue-router'
import Listeannonces from "@/views/Listeannonces.vue";
import Uploader from "@/views/Uploader.vue";
import DetailAnnonce from "@/views/DetailAnnonce.vue";

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


    ]

})