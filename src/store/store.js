import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            data: null
        },

        annonces: [{
                id: "tanialasceptique",
                propriétaire: "fBzhsmlSFqSsxeZucySy3VmNrIn1",
                categorie: "poussette",
                marque: "safetyfirst",
                titre: "Loue super poussette",
                prix: "3€/j",
                description: "Super poussette trois roues",
                ville: "Paris",
                dateDePublication: "2019-01-03T21:54:00.000Z",
                disponibility: true,
                imageUrl: "https://www.aubert.com/medias/sys_aubert/root/hf5/hca/9125112053790/01127161-1.jpg"
            },

            {
                id: "yuyuanlameprisante",
                propriétaire: "n7EuNc0EE4gK1grmKeFlZK4ecaS2",
                categorie: "poussette",
                marque: "Mac Laren",
                titre: "Loue superpoussette",
                prix: "5€/j",
                description: "Mon enfant ne l'utilise plus, je vous la propose à la location!",
                ville: "Paris",
                dateDePublication: "2019-01-03T21:54:00.000Z",
                disponibility: true,
                imageUrl: "https://www.icklebubba.com/wp-content/uploads/2020/06/Stomp-V3_All-in-One-with-Isofix_Silver-Frame_Silver_002.jpg"
            }
        ],
        annonceChoisie: {}

    },
    getters: {
        user(state) {
            return state.user
        },

        annonces(state) {
            return state.annonces
        },
        loggedIn(state) {
            return state.user.loggedIn
        },
        annonceChoisie(state) {
            return state.annonceChoisie
        }
    },
    mutations: {
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        },
        SET_USER(state, data) {
            state.user.data = data;
        },
        SET_ANNONCES(state, payload) {
            state.annonces.push(payload);
        },
        SET_ANNONCECHOISIE(state, donnee) {
            state.annonceChoisie = donnee;
        }
    },
    actions: {
        fetchUser({ commit }, user) {
            commit("SET_LOGGED_IN", user !== null);
            if (user) {
                commit("SET_USER", {
                    displayName: user.displayName,
                    email: user.email
                });
            } else {
                commit("SET_USER", null);
            }
        },
        displayAdverts({ commit }) {
            //var titre;
            var ref = firebase.database().ref('annonces');
            ref.once('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var childKey = childSnapshot.key;
                    var childData = childSnapshot.val();
                    // annonces.push(childData);
                    console.log(childKey + " et " + childData.prix)
                    const annonce = {
                        id: childKey,
                        propriétaire: childData.propriétaire,
                        categorie: childData.categorie,
                        marque: childData.marque,
                        titre: childData.titre,
                        prix: childData.prix,
                        description: childData.description,
                        ville: childData.ville,
                        dateDePublication: childData.date,
                        disponibility: true,
                        imageUrl: childData.imageUrl
                    }
                    commit('SET_ANNONCES', annonce)

                });
            });
        },
        getAnnonce({ commit },categorie) {
           

            var ref = firebase.database().ref('annonces');
            ref.once('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var childKey = childSnapshot.key;
                    var childData = childSnapshot.val();
                        const advert = {
                        id: childKey,
                        propriétaire: childData.propriétaire,
                        categorie: childData.categorie,
                        marque: childData.marque,
                        titre: childData.titre,
                        prix: childData.prix,
                        description: childData.description,
                        ville: childData.ville,
                        dateDePublication: childData.date,
                        disponibility: true,
                        imageUrl: childData.imageUrl
                    }
                
                    if (categorie != null) {
                        if(advert.categorie == categorie){
                            commit('SET_ANNONCES', advert)
                        }
                    }
                    else {
                        commit('SET_ANNONCES', advert)
                         }
                    
                });
            });
        }
    }
       
    
});