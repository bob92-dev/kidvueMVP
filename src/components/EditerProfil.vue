<template>
    
    <form class="center">
        <input v-model="prenom" class="input" type="text"  placeholder="Prénom">
        <input v-model="nom" class="input" type="text"  placeholder="Nom">
        <input v-model="pseudo" class="input" type="text"  placeholder="Pseudo">

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
        <input v-model="adress" type="text"  placeholder="Adresse complet: 1 rue de paris"></label>
        <label>Code postal: <input v-model="codePostal" type="text"  placeholder="75001"></label>
        <input v-model="ville" class="input" type="text"  placeholder="Ville: Paris"><br>
        
        
        
        <label>Votre numéro de téléphone: <input v-model="numeroTelephone" class="input" type="text"  placeholder="0600000000"></label>
        <button @click.prevent='writeUserData' class="btn btn-secondary" >Valider</button>
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