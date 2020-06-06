<template>
  <div>
   <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up "></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">KidsOnTrip</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
   </div>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
          { icon: 'supervisor_account', title: 'Voir toutes les annonces', link: '/annonces' },
          { icon: 'room', title: 'Louer votre matériel', link: '/uploader' },
          { icon: 'person', title: 'Profil', link: '/profil' },
          { icon: 'face', title: 'Inscription', link: '/signup' },
          { icon: 'lock_open', title: 'Connexion', link: '/signin' },
          { icon: 'lock_close', title : 'Deconnexion', link:'/deconnexion' }
        ],
        connected: this.$store.getters.userUid
      }
    }
  }
</script>