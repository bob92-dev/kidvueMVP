<template>
  <div>
      <h3>{{annonce.titre}}</h3>
      <h4>{{annonce.categorie}}, {{annonce.marque}}, {{annonce.ville}}</h4>
      <img v-bind:src='annonce.img' />
      <h3>{{annonce.prix}}</h3>
      <h4>{{annonce.datePublication}}, {{annonce.pseudo}}</h4>
      <p>{{annonce.description}}</p>
    </div>
</template>
<script>
export default {
    props: {
    annonce: Object,
    user:Object,
    }    
}      
</script>