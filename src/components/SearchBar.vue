<template>
  <main id="site-content" role="main">
    <div class="hero shift-with-hiw js-hero">
      <div class="hero__background" data-native-currency="GBP" aria-hidden="true">
        <div class="air-slideshow hero-slideshow">
          <img alt="Paris-ac2c9c35b05b19e65af7c8eee89f2fae" src="@/assets/voitureKOT.jpg" width="100%" />
        </div>
      </div>
      <div class="hero__content page-container page-container-full text-center">
        <div class="va-container va-container-v va-container-h">
          <div class="va-middle">
            <h2 class="text-branding text-jumbo text-contrast space-1 hero__heading">Voyagez léger</h2>
            <div class="h4 text-contrast space-4">Louez une poussette à l'arrivée.</div>
          </div>
        </div>
        <div class="hero__content-footer hide-sm">
          <div class="col-sm-12">
            <div id="searchbar">
              <div class="searchbar">
                <select v-model="select">
                  <option v-bind:key="index" v-for="(materiel, index) in materiels">{{ materiel }}</option>
                </select>

                <form id="searchbar-form" action="/s">
                  <div class="searchbar__input-wrapper">
                    <label class="searchbar__location">
                      <input
                        v-model="lieu"
                        id="lieu"
                        type="text"
                        class="input-large input-contrast"
                        autocomplete="off"
                        name="location"
                        placeholder="Où voulez-vous aller?"
                        required
                      />
                    </label>

                    <label class="searchbar__date" for="depart">
                      <span class="screen-reader-only">Sélectionnez la date de départ</span>
                      <input
                        v-model="datedepart"
                        type="date"
                        id="datedepart"
                        :@click="datechecker"
                        required
                      />
                    </label>

                    <label class="searchbar__date" for="retour">
                      <span class="screen-reader-only">Sélectionnez la date de départ</span>
                      <input v-model="dateretour" type="date" id="dateretour" required />
                    </label>
                  </div>

                  <router-link
                    class="searchbar__submit btn btn-primary btn-large"
                    :to="{
                      name: 'annonces',
                      params: { categorie: this.select }
                    }"
                    >Rechercher</router-link
                  >
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  props: {
    categorie: String,
    },
  data() {
    return {
      lieu: "",
      datedepart: "",
      dateretour: "",
      select: "",
      materiels: ["poussette", "lit parapluie", "siège auto"]
    };
  }
  
};
</script>

<style scoped>
</style>