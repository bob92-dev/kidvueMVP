<template>
    <div class="center">
        <p>Connexion</p>
        <input  class= "input" type="email" v-model="email" placeholder="Email"><br>
        <input  class= "input" type="password" v-model="password" placeholder="Mot de passe"><br>
        <button type="button" class="btn btn-secondary" @click="signIn">Connecter</button>
        <span>Pas encore inscrit?<router-link :to= "{name: 'inscription' }">Inscrivez vous</router-link></span>
    </div>
    
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }
    },
    methods: {
      onSignin () {
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      },
      onDismissed () {
        this.$store.dispatch('clearError')
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