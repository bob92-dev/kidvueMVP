<template>
  <div>
    <Annonce />
    <Annonce />
  </div>
</template>

<script>
import Annonce from "@/components/annonce.vue";
//import axios from "axios";
export default {
  components: {
    Annonce
  }//,
  //appel à l'pi
  //created() {
  //  axios
  //    .get("http://localhost:3000/annonces")
 //     .then(response => {
 //      console.log(response.data);
 //     })
 //     .catch(error => {
 //       console.log("There is an error");
//      });
//  }
};
</script>
