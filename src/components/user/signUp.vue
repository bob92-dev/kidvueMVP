<template>
    <div class="center">
        <p>Inscrivez-vous:</p>
        <form @submit.prevent="onSignup">
        <input  class= "input" type="email" v-model="email" placeholder="Email"><br>
        <input  class= "input" type="password" v-model="password" placeholder="Mot de passe"><br>
         <input  class= "input" type="password" v-model="confirmPassword" :rules="[comparePasswords]" placeholder="confirmez mot de passe"><br>

        <button type="button" class="btn btn-secondary" @click="onSignup">Valider</button>
        <span>    Déjà inscrit?  <router-link :to="{ name: 'connexion' }" >Connexion</router-link></span>
        </form>
    </div>
</template>

<script>


export default {
    data(){
        return{
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    computed: {
      comparePasswords () {
        return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
      },
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
      onSignup () {
        this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
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