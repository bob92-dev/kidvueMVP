<template>
 
  <div class="annonce">
    <router-link
      class="annonce-lien"
      :to="{ name: 'detail-annonce', params: { id: annonce.id } }"
      >Voir le détail de l'annonce
    </router-link>
    <div>{{ annonce.id }}</div>
    <div>{{ annonce.category }}</div>
    <div>{{ annonce.marque }}</div>
    <div>{{ annonce.titre }}</div>
    <div>{{ annonce.description }}</div>
    <div>{{ annonce.ville }}</div>
    <button @click="send">Contacter le propriétaire</button>>
      <Contact v-if="showContact"/>
  </div>
  
 
</template>

<script>
import Contact from "@/components/Contact.vue";

export default {
  components: {
    Contact
  },

  props: {
    annonce: Object
  },
  data() {
    return {
      showContact : false
    }

  },
  methods:{ send: function(){
    this.showContact = true
  }
  }
};

</script>
