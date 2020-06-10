<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Formulaire d'inscription</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row"></div>

              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Mot de passe</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="confirmPassword"
                  class="col-md-4 col-form-label text-md-right"
                >Confirmez le mot de passe</label>

                <div class="col-md-6">
                  <input
                    id="confirmPassword"
                    type="password"
                    class="form-control"
                    name="confirmPassword"
                    value
                    required
                    autofocus
                    v-model="form.confirmPassword"
                  />
                </div>
              </div>
              <button
                @click="submit"
                class="bouton"
              >Continuer</button>

              <section v-if="connected.loggedIn">
                <div class="form-group row">
                  <label for="pseudo" class="col-md-4 col-form-label text-md-right">Pseudo</label>

                  <div class="col-md-6">
                    <input
                      id="pseudo"
                      type="pseudo"
                      class="form-control"
                      name="pseudo"
                      value
                      required
                      autofocus
                      v-model="form.pseudo"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="Nom" class="col-md-4 col-form-label text-md-right">Nom</label>

                  <div class="col-md-6">
                    <input
                      id="email"
                      type="text"
                      class="form-control"
                      name="email"
                      value
                      required
                      autofocus
                      v-model="form.nom"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="Prenom" class="col-md-4 col-form-label text-md-right">Prénom</label>

                  <div class="col-md-6">
                    <input
                      id="prenom"
                      type="text"
                      class="form-control"
                      name="prenom"
                      value
                      required
                      autofocus
                      v-model="form.prenom"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="Adresse" class="col-md-4 col-form-label text-md-right">Adresse</label>

                  <div class="col-md-6">
                    <input
                      id="adresse"
                      type="text"
                      class="form-control"
                      name="adresse"
                      value
                      required
                      autofocus
                      v-model="form.adress"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="CodePostal" class="col-md-4 col-form-label text-md-right">Code postal</label>

                  <div class="col-md-6">
                    <input
                      id="codePostal"
                      type="number"
                      class="form-control"
                      name="codePostal"
                      value
                      required
                      autofocus
                      v-model="form.codePostal"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="Ville" class="col-md-4 col-form-label text-md-right">Ville</label>

                  <div class="col-md-6">
                    <input
                      id="ville"
                      type="text"
                      class="form-control"
                      name="ville"
                      value
                      required
                      autofocus
                      v-model="form.ville"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    for="Numero"
                    class="col-md-4 col-form-label text-md-right"
                  >Numéro de téléphone</label>

                  <div class="col-md-6">
                    <input
                      id="numero"
                      type="number"
                      class="form-control"
                      name="numero"
                      value
                      required
                      autofocus
                      v-model="form.numeroTelephone"
                    />
                  </div>
                </div>
             
              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button
                    type="submit"
                    @click="writeUserData"
                    class="bouton"
                  >Finaliser l'inscription</button>
                  </div>
              </div>
              </section>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";
export default {
  name: 'writeUserData',
  data() {
    return {
      connected: this.$store.getters.user,
      form: {
        email: "",
        password: "",
        confirmPassword: "",
        nom: "",
        pseudo: "",
        datenaissance: "",
        adress: "",
        codePostal: "",
        ville: "",
        numeroTelephone: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .catch(function(err) {
          this.data.error = err.message;
        });
    },
    alert(){
      return alert("Votre inscription a été créer avec succès.")
    },
    writeUserData() {
      var user = firebase.auth().currentUser;
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date +' '+ time;
      console.log("users/" + user.uid);
      firebase
        .database()
        .ref("users/" + user.uid)
        .set({
          prenom: this.form.prenom,
          nom: this.form.nom,
          pseudo: this.form.pseudo,
          datenaissance: this.form.datenaissance,
          adresse: this.form.adress,
          codePostal: this.form.codePostal,
          ville: this.form.ville,
          numeroTelephone: this.form.numeroTelephone,
          email: this.form.email,
          dateinscription: dateTime
        });
        this.alert();
    }
  },
};
</script>
<style scoped>
.bouton {
  height: 40px;
  background-color: brown;
}
</style>