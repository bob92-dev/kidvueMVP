<template>
  <div class="form">
    <form>
      <div class="formgroup">
        <input
          v-model="materiel"
          type="text"
          id="materiel"
          placeholder="Quel matériel cherchez-vous ?"
          required
        />
      </div>
      <div class="formgroup">
        <input v-model="lieu" type="text" id="lieu" placeholder="Où allez-vous ?" required />
      </div>
      <div class="formgroup">
        <label for="depart">Quand partez-vous ?</label>
        <input
          v-model="datedepart"
          type="date"
          id="datedepart"
          :@click="datechecker"
          required
        />
      </div>
      <div class="formgroup">
        <label for="depart">Jusqu'à quand ?</label>
        <input v-model="dateretour" type="date" id="dateretour" required/>
      </div>
      <button class="btn btn-primary" type="submit" v-on:click.prevent>Rechercher</button>
    </form>
    <div>{{materiel}}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
    return {
      materiel: "",
      lieu: "",
      datedepart: "",
      dateretour: ""
    }
 } 
};
</script>

<style scoped>
</style>