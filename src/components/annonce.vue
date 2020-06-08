<template>
<router-link class="annonce"  :to="{ name: 'DetailAnnonce', params: { id: annonce.id } }">
   <div >

          <img v-bind:src='imageUrl' />
          <p>{{annonce.titre}}</p>
          <p>{{annonce.prix}}</p>
          <p>{{annonce.marque}}</p>
          <p>{{annonce.description}}</p>
           <p>{{annonce.ville}}</p>
          <button @click="send" class="bouton">contacter le proprio</button>
          <br>
          
           

  </div>

</router-link>
</template>

<script>


export default {

  props: {
    annonce: Object,
    },
  data() {
    return {
      showContact: false,
      imageUrl: ""
    }
    },
    created(){
        this.imageUrl = this.annonce.imageUrl


  },
  methods:{ send: function(){
    this.showContact = true
  }
  },
  
 };

</script>

<style scoped>

.bouton {
  height: 50px;
background-color: chartreuse;
color:black;
border: black solid 2px;

}
.annonce {
color:black;
text-align: center;

}


</style>