<template>
    <div>
      <h3>{{annonce.titre}}</h3>
      <h4>{{annonce.categorie}}, {{annonce.marque}}, {{annonce.ville}}</h4>
      <img v-bind:src='annonce.imageUrl' />
      <h3>{{annonce.prix}}</h3>
      <h4>{{annonce.dateDePublication}}, {{this.pseudo}}</h4>
      <p>{{annonce.description}}</p>
    </div>
</template>
<script>
import firebase from 'firebase';
export default {
    props:['id'],
    
     data(){
        return {
            Listannonces:[],
            annonce:"",
            pseudo:"",
        }
     },
     created(){
        this.Listannonces = this.$store.getters.annonces
        this.annonce = this.getAnnonce();
     },
     mounted:function(){
        this.recupList();
        this.getAnnonce();
        console.log("l'id est " + this.id + " et le titre: " + this.annonce.titre) 
      },
     methods:{
       recupList(){
         this.$store.dispatch('displayAdverts')
       },
       getAnnonce(){
        for (let i = 0; i < this.Listannonces.length; i++) {
                if (this.id == this.Listannonces[i].id) {
                    this.annonce = this.Listannonces[i];
                    console.log(this.annonce.titre);
                }
            }
       },
       getPseudo(){
          let ref = firebase.database().ref('users/' + this.annonce.propriétaire).child("pseudo");
          ref.on("value", function(snapshot) {
            this.pseudo =snapshot.val();
            console.log(this.pseudo)
          });
       }
     }
}
</script>