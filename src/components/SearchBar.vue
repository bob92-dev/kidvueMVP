<template>
    <div class="form">
        <form>
            <div class="formgroup">
                <label for="materiel">Quel matériel cherchez-vous ?</label> 
                <input v-model="materiel" type="text" id="materiel">
            </div>
             <div class="formgroup">
                <label for="lieu">Où allez-vous ?</label> 
                <input v-model="lieu" type="text" id="lieu">
              </div>
              <div class="formgroup">
                <label for="date">Quand partez-vous ?</label> 
                <input v-model="datedepart" type="date" id="datedepart">
              </div>
              <div class="formgroup">
                <label for="date">Jusqu'à quand'</label> 
                <input v-model="dateretour" type="date" id="dateretour">
              </div>
               <button class="btn btn-primary"type="submit" v-on:click.prevent>Rechercher</button>  
        </form>
        <div>{{materiel}}</div>


    </div>
</template>

<script>
export default {
      data(){
        return {
            materiel : '',
            lieu : '',
            datedepart : '',
            dateretour : ''             
        }
    }
  
}
</script>

<style scoped>

</style>