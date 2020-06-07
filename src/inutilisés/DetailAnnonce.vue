<template>
    <h1> on montre l'id de l'annonce {{ this.id }} et son titre est {{ annonce.title }}  </h1>
</template>
<script>
import AnnonceService from '@/services/AnnonceService.js'
// import firebase from 'firebase';
export default {
    props : ['id'],
    data(){
        return {
            annonce :{}
        }
    },
    created(){
        /* ref = firebase.database().ref('/annonces/');
        this.refdb.once('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                // ...
                console.log(childKey + " " + childData)
            });
        }) */
     AnnonceService.getAnnonce(this.id).then(response => {
            //this.annonce = response.data
            console.log(response.data)
        }).catch(error=>{
            console.log('ceci est une erreur', error.response)
        })
    } 
}
</script>