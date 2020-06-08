<template>
  <v-footer color="primary lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn color="white" text rounded class="my-2" to="/">ACCUEIL</v-btn>

      <v-btn color="white" text rounded class="my-2" to="/cgv">CGV</v-btn>

      <v-btn color="white" text rounded class="my-2" to="/contact">NOUS CONTACTER</v-btn>

      <v-btn color="white" text rounded class="my-2" to="/apropos">QUI SOMMES-NOUS ?</v-btn>

      <v-btn color="white" text rounded class="my-2" to="/contact"></v-btn>


      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>KidsOnTrip</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  
};
</script>
