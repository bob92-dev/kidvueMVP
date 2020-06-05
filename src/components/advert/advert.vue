<template>
   <div class="annonce">
     <div class="container">
      <div class="flipper">
        <div class="front">
          <img :src="imagesource" />
          <h3 class="caption">{{advert.title}}</h3>
          <p class="caption"> {{ advert.price }}</p>
        </div>
        <div class="back">
          <h3>{{advert.title}}</h3>
          <p class="date">{{advert.brand}}</p>
          <p class="description">{{advert.description}}</p>
          <button @click="send" class="button-2 btn-info ">Contacter le propriétaire</button>
          <Contact v-if="showContact"/>
            </div>
      </div>
    </div>
  </div>
  
 
</template>

<script>
export default {
    props: ['id'],
    computed: {
      advert () {
        return this.$store.getters.loadedAdvert(this.id)
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      userIsCreator () {
        if (!this.userIsAuthenticated) {
          return false
        }
        return this.$store.getters.user.id === this.advert.creatorId
      },
      loading () {
        return this.$store.getters.loading
      }
    }
  }
/* import Contact from "@/components/Contact.vue";

export default {
  components: {
    Contact,
  },
  props: {
    annonce: Object,
    },
  data() {
    const imagesource = require(`@/assets/${this.annonce.photo}`)
    return {
      showContact: false,
      imagesource
    }

  },
  methods:{ send: function(){
    this.showContact = true
  }
  }
 }; */

</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway|Reenie+Beanie);

* {
  box-sizing: border-box;
}

html,
body {
  margin: 5%;
  font-family: "Raleway", sans-serif;
  line-height: 1.5em;
}

img {
  height:175px;
}

a {
  color: black;
}

.caption,
h3,
.date {
  margin: 0;
  text-align: center;
}

.caption,
h3 {
  font-family: "Papyrus", sans-serif;
  font-size: 1em;
  padding: 10px 10px 0 10px;
}

.date {
  font-size: 0.75em;
}

.description {
  font-size: 0.9em;
  padding: 0 20px 20px 20px;
  text-align: left;
}

.container {
  perspective: 1000px;
  display: inline-block;
  margin: 3%;
}

.container:hover .flipper {
  transform: rotateY(180deg);
}

.container,
.front,
.back {
  width: 250px;
  height: 250px;
}

.flipper {
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
}

.front,
.back {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.front {
  z-index: 2;
}

.back {
  transform: rotateY(180deg);
}

#content {
  text-align: center;
}

</style>
