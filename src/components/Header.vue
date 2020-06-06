<template>
   <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Kids on Trip Logo"
          class="shrink mr-2"
          contain
          src="require('@/assets/kids_on_tripLogo.png')"
          transition="scale-transition"
          width="40"
        />


        <div v-if="connected != null">
          <a class="hdr-btn link-reset lys-link text-white">
            <router-link
              class="btn btn-outline-secondary"
              :to="{ name: 'uploader' }"
              >Louer votre matériel</router-link
            >
            <router-link
              class="btn btn-outline-secondary"
              :to="{ name: 'deconnexion' }"
              >Déconnexion</router-link
            >
            <router-link
              class="btn btn-outline-secondary"
              :to="{ name: 'profil' }"
              >Profile</router-link
            >
          </a>
        </div>
        <div v-else>
            <router-link
              class="btn btn-outline-secondary"
              :to="{ name: 'uploader' }"
              >Louer votre matériel</router-link
            >
            <router-link
              class="btn btn-outline-secondary"
              :to="{ name: 'inscription' }"
              >Inscription</router-link
            >
            <v-button>
            <router-link
              class="btn btn-outline-secondary"
              :to="{ name: 'connexion' }"
              >Connexion</router-link
            >
         </v-button>
        </div>
      </div>

      <v-spacer></v-spacer>

      </v-app-bar>

</template>

<script>
export default {
  data() {
    return {
      connected: this.$store.getters.userUid
    };
  }
};
</script>

<style scoped></style>
