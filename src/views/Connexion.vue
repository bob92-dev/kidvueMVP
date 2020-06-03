<template>
    <div class="center">
        <p>Inscription</p>
        <input  class= "input" type="email" v-model="email" placeholder="Email"><br>
        <input  class= "input" type="password" v-model="password" placeholder="Mot de passe">
        <button class="btn btn-secondary" @click="signUp">Connecter</button>
        <span>Pas encore inscrit?<router-link :to= "{name: 'inscription' }">Inscrivez vous</router-link></span>
    </div>
    
</template>

<script>

export default {
    
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