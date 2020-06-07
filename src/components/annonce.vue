<template>
   <div class="annonce">

          <img v-bind:src='imageUrl' />
          <p>{{annonce.titre}}</p>
          <p>{{annonce.price}}</p>
          <p>{{annonce.imageUrl}}</p>



          <p>{{annonce.brand}}</p>
          <p>{{annonce.description}}</p>
          <button @click="send" class="btn btn-info">Contacter le propriétaire</button>

  </div>

 
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
.annonce {
color:black;
text-align: center;

}


</style>