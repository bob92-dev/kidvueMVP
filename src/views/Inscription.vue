<template>
    <div class="center">
        <p>Inscrivez-vous:</p>
        <input  class= "input" type="email" v-model="email" placeholder="Email"><br>
        <input  class= "input" type="password" v-model="password" placeholder="Mot de passe"><br>
         <input  class= "input" type="password" v-model="confirmPassword" placeholder="confirmez mot de passe"><br>

        <button type="button" class="btn btn-secondary" @click="signUp">Valider</button>
        <span>    Déjà inscrit?  <router-link :to= "{name: 'connexion' }">Connexion</router-link></span>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'signUp',
    data(){
        return{
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        signUp: function() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                function (user){
                    alert(user+"Votre compte a été créé avec succès.")
            },
                function (err) {
                    alert("Oups!" + err.message)
            });
            
        }
    }
}
</script>

<style scoped>

.input {
   
  width: 30%;
}
.center {

  margin: auto;
  margin-top: 30px;
  width: 50%;
  border: 1px solid rgb(0, 0, 0);
  padding: 10px;
}
</style>