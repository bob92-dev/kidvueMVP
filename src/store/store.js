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

                category: "poussette",
                marque: "safetyfirst",
                titre: "Loue super poussette",
                prix: "3€/j",
                description: "Super poussette trois roues",
                ville: "Paris",
                date: "2019-01-03T21:54:00.000Z",
                disponibility: true,
                imageUrl: "https://www.aubert.com/medias/sys_aubert/root/hf5/hca/9125112053790/01127161-1.jpg%22%7D"
            },

            {
                category: "poussette",
                marque: "Mac Laren",
                titre: "Loue superpoussette",
                prix: "5€/j",
                description: "Mon enfant ne l'utilise plus, je vous la propose à la loctaion!",
                ville: "Paris",
                date: "2019-01-03T21:54:00.000Z",
                disponibility: true,
                photo: "poussette2.jpg"

            }
        ]
    },
    getters: {
        user(state) {
            return state.user
        },

        annonces(state) {
            return state.annonces
        }
    },
    mutations: {
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        },
        SET_USER(state, data) {
            state.user.data = data;
        },
        /* SET_ANNONCES(state, data){
          state.annonces.data = data;
        } */
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
        displayAdverts() {
            //var titre;
            var ref = firebase.database().ref('annonces');
            ref.once('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var childKey = childSnapshot.key;
                    var childData = childSnapshot.val();
                    // annonces.push(childData);
                    console.log(childKey + " et " + childData.prix)

                });
            });
        }
    }
});