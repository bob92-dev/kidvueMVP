<template>
  <div>
    <h1>Remplissez le formulaire pour ajouter une annonce></h1>
    <form @submit.prevent="creationAnnonce">
      
      <label>Selectionnez une catégorie</label>
      <select v-model="annonce.categorie">
        <option v-for="categorie in categories" :key="categorie">{{ categorie }}</option>
      </select>
      
      <h3>décrivez ce que vous voulez proposer à la location</h3>
      <div class="field">
        <label>Title</label>
        <input v-model="annonce.titre" type="text" placeholder="Ajoutez le titre de votre annonce" />
      </div>
      
      <div class="field">
        <label>Décrivez votre bien</label>
        <input v-model="annonce.description" type="text" placeholder="Ajoutez une decsription" />
      </div>
      
      <h3>Où vous trouvez vous ?</h3>
      <div class="field">
        <label>Location</label>
        <input v-model="annonce.ville" type="text" placeholder="Ajoutez un lieu" />
      </div>
      
      <h3>A partir de quelle date est-il disponible ?</h3>
      <div class="field">
        <label>Date</label>
        <datepicker v-model="annonce.date" placeholder="Sélectionnez une date" />
      </div>

      <h3>Quel est le tarif journalier ?</h3>
      <div class="field">
        <label>Location</label>
        <input v-model="annonce.prix" type="text" placeholder="Indiquez votre tarif journalier" />
      </div>

            <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
components: {
    Datepicker
  },
  data(){
     return {
      annonce: this.creationObjetAnnonce(),
      categories: this.$store.state.categories
      }
  },
  methods:{
    creationAnnonce(){
      this.$store.dispatch('creationAnnonce', this.annonce)
    },
    creationObjetAnnonce(){
      const user = this.$store.state.user;
      const id = Math.floor(Math.random() * 10000000);
      return {
            id: id,
            categorie: '',
            organizer: user,
            titre: '',
            description: '',
            ville: '',
            date: '',
            prix: '',
            photo: '',
            
         }
     }
  }
 
};
</script>
<style scoped>
.field {
      margin-bottom: 24px;
    }
</style>

