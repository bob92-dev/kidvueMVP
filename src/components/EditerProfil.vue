<template>
    
    <form class="center">
        <p>Terminer mon inscription  </p>
        <input v-model="prenom" class="input" type="text"  placeholder="Prénom">
        <input v-model="nom" class="input" type="text"  placeholder="Nom">
        <input v-model="pseudo" class="input" type="text"  placeholder="Pseudo">

                    <label>votre date de naissance: 
                      
                      <input
                        v-model="datenaissance"
                        type="date"
                        id="datenaissance"
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
    //name: 'writeUserData',
    //name: 'recupUserData',

    data(){
        return{
            prenom: "",
            nom: "",
            pseudo:"",
            datenaissance:"",
            adress:"",
            codePostal:"",
            ville:"",
            numeroTelephone:"",
            utilisateurcourant:this.$store.getters.userData.id
        }
         
    },
    /*created(){
    this.data.utilisateurcourant = this.$store.getters.user.data
    },*/
    mounted:function(){
        this.appelFb()
        //sthis.utilisateurcourant = this.$store.getters.user.data
        console.log("user" + this.utilisateurcourant.id)
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
        appelFb(){
            var refUser = firebase.database().ref('/users/' + this.utilisateurcourant);
            var firstname;
            refUser.child("prenom").on("value", function(snapshot) {
                firstname = snapshot.val;
                console.log(firstname);
            });
            var lastname;
            refUser.child("nom").on("value", function(snapshot) {
                lastname = snapshot.val;
                console.log(lastname);
            });
            var nickname;
            refUser.child("pseudo").on("value", function(snapshot) {
                nickname = snapshot.val;
                console.log(nickname);
            });
            var birthdate;
            refUser.child("datenaissance").on("value", function(snapshot) {
                birthdate = snapshot.val;
                console.log(birthdate);
            })
            var zip;
            refUser.child("codePostal").on("value", function(snapshot) {
                zip = snapshot.val;
                console.log(zip);
            })
            var town;
            refUser.child("ville").on("value", function(snapshot) {
                town = snapshot.val;
                console.log(town);
            })
            var phoneNumber;
            refUser.child("numeroTelephone").on("value", function(snapshot) {
                phoneNumber = snapshot.val;
                console.log(phoneNumber);
            })
            var mail;
            refUser.child("numeroTelephone").on("value", function(snapshot) {
                mail = snapshot.val;
                console.log(mail);
            })
            var adresse;
            refUser.child("numeroTelephone").on("value", function(snapshot) {
                adresse = snapshot.val;
                console.log(adresse);
            })
            const utilisateur = {
                id: this.data.utilisateurcourant.id,
                prenom: firstname,
                nom: lastname,
                pseudo: nickname,
                email: mail,
                numeroTelephone: phoneNumber,
                datenaissance: birthdate,
                adress: adresse,
                codePostal: zip,
                ville: town
            }
            this.$store.dispatch('fetchUser', utilisateur)
        }
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