<template>
  <div>
      {{ id  }}
   
    </div>
</template>
<script>

import firebase from 'firebase';
export default {
    props : ['id'],
    data(){
        return {
            annonce : {}
        }
    },
     created:function(){
        this.recupData()
      },
    methods:{
      recupData(){
        console.log("coucou id " + this.id);
        var refAnnonce = firebase.database().ref('/annonces/' +this.id);
        console.log(refAnnonce)
        var titre;
        refAnnonce.child("titre").on("value",function(snapshot){
          titre=snapshot.val;
          console.log(titre);
        })
        var categorie;
        refAnnonce.child("categorie").on("value",function(snapshot){
          categorie=snapshot.val;
          console.log(categorie);
        })
        var description;
        refAnnonce.child("description").on("value",function(snapshot){
          description=snapshot.val;
          console.log(description);
        })
        var marque;
        refAnnonce.child("marque").on("value",function(snapshot){
          marque=snapshot.val;
          console.log(marque);
        })
        var img;
        refAnnonce.child("imageUrl").on("value",function(snapshot){
          img=snapshot.val;
          console.log(img);
        })
        var prix;
        refAnnonce.child("prix").on("value",function(snapshot){
          prix=snapshot.val;
          console.log(prix);
        })
        var ville;
        refAnnonce.child("ville").on("value",function(snapshot){
          ville=snapshot.val;
          console.log(ville);
        })
        var user;
        var pseudo;
        refAnnonce.child("propriétaire").on("value",function(snapshot){
          user=snapshot.val;
          let ref = firebase.database().ref('users/' + user).child("pseudo");
          ref.on("value", function(snapshot) {    
            pseudo =snapshot.val();
            console.log(pseudo)
          });
        })
        var datePublication;
        refAnnonce.child("dateDePublication").on("value",function(snapshot){
          datePublication=snapshot.val;
          console.log(datePublication);
        })
        var dateIndisponibilite;
        refAnnonce.child("dateIndisponibilité").on("value",function(snapshot){
          dateIndisponibilite=snapshot.val;
          console.log(dateIndisponibilite);
        })
      }
    }      
}      
</script>