<template>
  <div>
    <Annonce v-for="annonce in annonces" :key="annonce.id" :annonce="annonce" />
  </div>
</template>

<script>
import Annonce from "@/components/annonce.vue";
import AnnonceService from "@/services/AnnonceService.js";

export default {
  components: {
    Annonce
  },
  props: ["select"],
  data() {
    return {
      annonces: []
    };
  },
  //appel à l'api
  created() {
    AnnonceService.getAnnonces()
      .then(response => {
        this.annonces = response.data;
      })
      .catch(error => {
        console.log("There is an error" + error.response);
      });
  }
};
</script>
