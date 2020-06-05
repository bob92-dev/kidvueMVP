<template>
  <div>
    <h1>Remplissez le formulaire pour ajouter une annonce></h1>
    <form @submit.prevent="onCreateAdvert">
      
      <label>Selectionnez une catégorie</label>
      <select v-model="advert.category">
        <option v-for="category in categories" :key="category">{{ category }}</option>
      </select>
      
      <h3>décrivez ce que vous voulez proposer à la location</h3>
      <div class="field">
        <label>Titre</label>
        <input v-model="advert.title" type="text" placeholder="Ajoutez le titre de votre annonce" />
      </div>
      
      <div class="field">
        <label>Décrivez votre bien</label>
        <input v-model="advert.description" type="text" placeholder="Ajoutez une decsription" />
      </div>
      
      <h3>Où vous trouvez vous ?</h3>
      <div class="field">
        <label>Ville</label>
        <input v-model="advert.location" type="text" placeholder="Ajoutez un lieu" />
      </div>
      
      <h3>A partir de quelle date est-il disponible ?</h3>
      <div class="field">
        <label>Date</label>
        <datepicker v-model="annonce.date" placeholder="Sélectionnez une date" />
      </div>

      <h3>Quel est le tarif journalier ?</h3>
      <div class="field">
        <label>Prix</label>
        <input v-model="advert.price" type="text" placeholder="Indiquez votre tarif journalier" />
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
export default {
    data () {
      return {
        title: '',
        category: '',
        creator: '',
        description: '',
        location: '',
        bookedDate: '',
        price: '',
        publicationDate: '',
        brand: '',
        image: null,
        imageUrl: ''
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' &&
          this.location !== '' &&
          this.imageUrl !== '' &&
          this.description !== ''
      },
      submittableDateTime () {
        const date = new Date(this.date)
        if (typeof this.time === 'string') {
          let hours = this.time.match(/^(\d+)/)[1]
          const minutes = this.time.match(/:(\d+)/)[1]
          date.setHours(hours)
          date.setMinutes(minutes)
        } else {
          date.setHours(this.time.getHours())
          date.setMinutes(this.time.getMinutes())
        }
        return date
      }
    },
    methods: {
      onCreateAdvert () {
        if (!this.formIsValid) {
          return
        }
        if (!this.image) {
          return
        }
        const advertData = {
          title: this.title,
          location: this.location,
          image: this.image,
          description: this.description,
          date: this.submittableDateTime
        }
        this.$store.dispatch('createAdvert', advertData)
        this.$router.push('/adverts')
      },
      onPickFile () {
        this.$refs.fileInput.click()
      },
      onFilePicked (event) {
        const files = event.target.files
        let filename = files[0].name
        if (filename.lastIndexOf('.') <= 0) {
          return alert('Please add a valid file!')
        }
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.imageUrl = fileReader.result
        })
        fileReader.readAsDataURL(files[0])
        this.image = files[0]
      }
    }
  }
/* import firebase from 'firebase';
import Datepicker from "vuejs-datepicker";

export default {
components: {
    Datepicker,
    
  },
  data(){
     return {
      annonce: this.creationObjetAnnonce(),
      categories: this.$store.state.categories,
      imageData: null,
      picture: null,
      uploadValue: 0

      }
  },
  methods:{
    creationAnnonce(){
      this.$store.dispatch('creationAnnonce', this.annonce)
    },
    creationObjetAnnonce(){
      const user = this.$store.state.user;
       
      return {
            id: '',
            categorie: '',
            organizer: user,
            titre: '',
            description: '',
            ville: '',
            date: '',
            prix: '',
            photo: ''            
         }
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
  }; */
</script>

<style scoped>
.field {
      margin-bottom: 24px;
    }
</style>

