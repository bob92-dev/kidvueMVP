<template>
    
    <form class="center">
        <p>Terminer mon inscription  </p>
        <input class="input" type="text" v-model="prenom" placeholder="Prénom">
        <input class="input" type="text" v-model="nom" placeholder="Nom">
        <input class="input" type="text" v-model="pseudo" placeholder="Pseudo">

                    <label class="" for="naissance">votre date de naissance: 
                      
                      <input
                        v-model="datenaissance"
                        type="date"
                        id="datenaissance"
                        :@click="datechecker"
                        required
                      />
                    </label>
     
        <label>Votre adresse: 
        <input class="input" type="text" v-model="adress" placeholder="Adresse complet: 1 rue de paris"></label>
        <label>Code postal: <input type="text" v-model="codePostal" placeholder="75001"></label>
        <input class="input" type="text" v-model="ville" placeholder="Ville: Paris"><br>
        
        
        
        <input class="input" type="number" v-model="codePostal" placeholder="Votre numéro de téléphone: 0600000000">
        <button class="btn btn-secondary" >Valider</button>
    </form>
</template>

<script>
export default {
    
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