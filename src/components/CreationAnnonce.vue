<template>
    
    <form class="center">
        
      <select v-model="categories" >
        <option v-for="categorie in categories" :key="categorie">{{ categorie }}</option>
      </select>
      
        <input v-model="titre" class="input" type="text"  placeholder="titre">
        <input v-model="description" class="input" type="text"  placeholder="description">
        
        <input v-model="marque" class="input" type="text"  placeholder="marque">
        <input v-model="prix" class="input" type="number"  placeholder="Prix par jour">

        <input v-model="imageUrl" class="input" type="url"  placeholder="lien d'image">
        <input v-model="ville" class="input" type="text"  placeholder="Ville: Paris"><br>

             
        <button @click.prevent='writeAnnonceData' class="btn btn-secondary" >Valider</button>
    </form>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'writeAnnonceData',

    data(){
        return{
           categories: ["poussette", "lit parapluie", "siège auto", "autre"],
            titre: "",
            marque: "",
            dateDePublication: "",
            prix: "",
            dateIndisponibilité: "",
            ville: "",
            description: "",
            imageUrl:"",
            propriétaire: ""
        }
    },
    
    methods: {

        writeAnnonceData: function() {
                    const today = new Date();
                    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    const dateTime = date +' '+ time;
                    
             var user = firebase.auth().currentUser;
           
            
                firebase.database().ref('annonces').push({
                    categorie: this.categorie,
                    titre: this.titre,
                    marque: this.marque,
                    dateDePublication: dateTime,
                    prix: this.prix,
                    dateIndisponibilité: [],
                    ville: this.ville,
                    description: this.description,
                    imageUrl: this.imageUrl,
                    propriétaire: user.uid
                });
        },
    

        }
    }

</script>

<style scoped>

.center {

  margin: auto;
  margin-top: 30px;
  width: 50%;
  border: 1px solid rgb(0, 0, 0);
  padding: 10px;
}
</style>