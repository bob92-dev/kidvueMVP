<template>
  <div>
    <h1>Remplissez le formulaire pour ajouter une annonce></h1>
    <form>
      
      <label>Selectionnez une catégorie</label>
      <select v-model="annonce.categorie">
        <option v-for="categorie in categories" :key="categorie">{{ categorie }}</option>
      </select>
      
      <h3>décrivez ce que vous voulez proposer à la location</h3>
      <div class="field">
        <label>Title</label>
        <input v-model="annonce.titre" type="text" placeholder="Ajoutez le titre de votre annonce" />
      </div>
      
      <div class="field">
        <label>Décrivez votre bien</label>
        <input v-model="annonce.description" type="text" placeholder="Ajoutez une decsription" />
      </div>
      
      <h3>Où vous trouvez vous ?</h3>
      <div class="field">
        <label>Location</label>
        <input v-model="annonce.ville" type="text" placeholder="Ajoutez un lieu" />
      </div>
      
      <h3>A partir de quelle date est-il disponible ?</h3>
      <div class="field">
        <label>Date</label>
        <datepicker v-model="annonce.date" placeholder="Sélectionnez une date" />
      </div>

      <h3>Quel est le tarif journalier ?</h3>
      <div class="field">
        <label>Location</label>
        <input v-model="annonce.prix" type="text" placeholder="Indiquez votre tarif journalier" />
      </div>

                
      <p>Chargez votre image</p>
      <input type="file" @change="previewImage" accept="image/*" >
 
    <div>
      <p>Progress: {{uploadValue.toFixed()+"%"}}
      <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
    </div>

    <div v-if="imageData!=null">
        <img  class="preview" :src="picture">
        <br>
      <button @click="onUpload">Upload</button>

    </div>
``    <input type="submit" class="button -fill-gradient" value="Submit" />
  </form>
  </div>

</template>

<script>
import firebase from 'firebase';


export default { 
components: {
   
    
  },
  name:'writeAnnonceData', 
  data(){
     return {
     categorie: '',
    propriétaire: '',
    titre: '',
    marque:'',
    description: '',
    ville: '',
    dateDePublication: '',
    dateIndisponibilité:[],
    prix: '',
    imageUrl: ''        

      }
  },
  methods:{
writeAnnonceData: function() {
        var user = firebase.auth().currentUser;
           
console.log( 'users/' + user.uid);
    firebase.database().ref('annonces').set({
    categorie: "",
    propriétaire: "",
    titre: this.titre,
    marque: this.marque,
    description: this.description,
    ville: this.ville,
    dateDePublication: this.dateDePublication,
    dateIndisponibilité: this.dateIndisponibilité,
    prix: this.prix,
    imageUrl: this.picture
                });
        },
   
     previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },
     onUpload() {
      this.picture = null;
       const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      
      storageRef.on(
        `state_changed`,
        snapshot => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            this.picture = url;
            this.annonce.photo = url;
            });
          
        }
      )
      }
     }
  };
</script>

<style scoped>
.field {
      margin-bottom: 24px;
    }
</style>