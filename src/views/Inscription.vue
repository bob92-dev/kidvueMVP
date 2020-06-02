<template>
    <div class="connexion">
        <p>Inscription</p>
        <input  class= "input" type="email" v-model="email" placeholder="Email"><br>
        <input  class= "input" type="password" v-model="password" placeholder="Mot de passe">
        <button class="perso" @click="signUp">Inscription</button>
        <span>Déjà inscrit?<router-link :to= "{name: 'connexion' }">Connexion</router-link></span>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'signUp',
    data(){
        return{
            email: '',
            password: ''
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
.perso {
    background-color: aqua;
}
.input {
   
  width: 15%;
}
</style>