import * as firebase from 'firebase'

export default {
    state: {
        loadedAdverts: [{
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
                id: 'afajfjadfaadfa323',
                title: 'Meetup in New York',
                date: new Date(),
                location: 'New York',
                description: 'New York, New York!'
            },
            {
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',
                id: 'aadsfhbkhlk1241',
                title: 'Meetup in Paris',
                date: new Date(),
                location: 'Paris',
                description: 'It\'s Paris!'
            }
        ]
    },
    mutations: {
        setLoadedAdverts(state, payload) {
            state.loadedAdverts = payload
        },
        createAdvert(state, payload) {
            state.loadedAdverts.push(payload)
        },
        updateAdvert(state, payload) {
            const advert = state.loadedAdverts.find(advert => {
                return advert.id === payload.id
            })
            if (payload.title) {
                advert.title = payload.title
            }
            if (payload.description) {
                advert.description = payload.description
            }
            if (payload.date) {
                advert.date = payload.date
            }
        }
    },
    actions: {
        loadAdverts({ commit }) {
            commit('setLoading', true)
            firebase.database().ref('annonces').once('value')
                .then((data) => {
                    const adverts = []
                    const obj = data.val()
                    for (let key in obj) {
                        adverts.push({
                            id: key,
                            title: obj[key].title,
                            description: obj[key].description,
                            imageUrl: obj[key].imageUrl,
                            date: obj[key].date,
                            location: obj[key].location,
                            creatorId: obj[key].creatorId
                        })
                    }
                    commit('setLoadedAdverts', adverts)
                    commit('setLoading', false)
                })
                .catch(
                    (error) => {
                        console.log(error)
                        commit('setLoading', false)
                    }
                )
        },
        createAdvert({ commit, getters }, payload) {
            const advert = {
                title: payload.title,
                location: payload.location,
                description: payload.description,
                date: payload.date.toISOString(),
                creatorId: getters.user.id
            }
            let imageUrl
            let key
            firebase.database().ref('annonces').push(advert)
                .then((data) => {
                    key = data.key
                    return key
                })
                .then(key => {
                    const filename = payload.image.name
                    const ext = filename.slice(filename.lastIndexOf('.'))
                    return firebase.storage().ref('annonces/' + key + '.' + ext).put(payload.image)
                })
                .then(fileData => {
                    imageUrl = fileData.metadata.downloadURLs[0]
                    return firebase.database().ref('annonces').child(key).update({ imageUrl: imageUrl })
                })
                .then(() => {
                    commit('createAdvert', {
                        ...advert,
                        imageUrl: imageUrl,
                        id: key
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
                // Reach out to firebase and store it
        },
        updateAdvertData({ commit }, payload) {
            commit('setLoading', true)
            const updateObj = {}
            if (payload.title) {
                updateObj.title = payload.title
            }
            if (payload.description) {
                updateObj.description = payload.description
            }
            if (payload.date) {
                updateObj.date = payload.date
            }
            firebase.database().ref('annonces').child(payload.id).update(updateObj)
                .then(() => {
                    commit('setLoading', false)
                    commit('updateAdvert', payload)
                })
                .catch(error => {
                    console.log(error)
                    commit('setLoading', false)
                })
        }
    },
    getters: {
        loadedAdverts(state) {
            return state.loadedAdverts.sort((advertA, advertB) => {
                return advertA.date > advertB.date
            })
        },
        featuredAdverts(state, getters) {
            return getters.loadedAdverts.slice(0, 5)
        },
        loadedAdvert(state) {
            return (advertId) => {
                return state.loadedAdverts.find((advert) => {
                    return advert.id === advertId
                })
            }
        }
    }
}