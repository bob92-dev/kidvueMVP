<template>
    
    <form class="center">
        <p>Terminer mon inscription  </p>
        <input class="input" type="text" v-model="prenom" placeholder="Prénom">
        <input class="input" type="text" v-model="nom" placeholder="Nom">
        <input class="input" type="text" v-model="pseudo" placeholder="Pseudo">

                    <label>votre date de naissance: 
                      
                      <input
                        v-model="datenaissance"
                        type="date"
                        id="datenaissance"
                        :@click="datechecker"
                        required
                      />
                    </label>
     
        <label>Votre adresse: 
        <input type="text" v-model="adress" placeholder="Adresse complet: 1 rue de paris"></label>
        <label>Code postal: <input type="text" v-model="codePostal" placeholder="75001"></label>
        <input class="input" type="text" v-model="ville" placeholder="Ville: Paris"><br>
        
        
        
        <label>Votre numéro de téléphone: <input class="input" type="text" v-model="numeroTelephone" placeholder="0600000000"></label>
        <button @click='writeUserData' class="btn btn-secondary" >Valider</button>
    </form>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'writeUserData',

    data(){
        return{
            prenom: '',
            nom: '',
            pseudo:'',
            datenaissance:'',
            adress:'',
            codePostal:'',
            ville:'',
            numeroTelephone:''

        }
    },
    
    methods: {

        writeUserData: function() {
             var user = firebase.auth().currentUser;
           
            console.log( 'users/' + user.uid);
                firebase.database().ref('users/' + user.uid).set({
                    prenom: this.prenom,
                    nom: this.nom,
                    pseudo: this.pseudo,
                    datenaissance: this.datenaissance,
                    adress: this.adress,
                    codePostal: this.codePostal,
                    ville: this.ville,
                    numeroTelephone: this.numeroTelephone
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