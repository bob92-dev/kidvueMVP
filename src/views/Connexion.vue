<template>
    <div class="connexion">
        <p>Inscription</p>
        <input  class= "input" type="email" v-model="email" placeholder="Email"><br>
        <input  class= "input" type="password" v-model="password" placeholder="Mot de passe">
        <button class="perso" @click="signUp">Inscription</button>
        <span>Pas encore inscrit?<router-link :to= "{name: 'inscription' }">Inscrivez vous</router-link></span>
    </div>
    
</template>

<script>

export default {
    
}
</script>

<style scoped>
.perso{
    background-color: aqua;
}
.input {  
  width: 15%;
}

</style>