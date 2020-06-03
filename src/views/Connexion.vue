<template>
  <div class="center">
    <p>Inscription</p>
    <input class="input" type="email" v-model="email" placeholder="Email" />
    <br />
    <input
      class="input"
      type="password"
      v-model="password"
      placeholder="Mot de passe"
    />
    <br />
    <button type="button" class="btn btn-secondary" @click="signIn">
      Connecter
    </button>
    <span>Pas encore inscrit?</span>
    <router-link :to="{ name: 'inscription' }">Inscrivez vous</router-link>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "signIn",
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorCode + errorMessage);
        });
      alert("vous êtes connecté avec succès!! ");
      var user = firebase.auth().currentUser;
      console.log("user's id c'est: " + user.uid);
    }
  }
};
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