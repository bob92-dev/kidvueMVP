import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers : {
        Accept: 'application/json',
       'Content-Type' : 'application/json'
    }
})

export default {
    getAnnonces(){
    return apiClient.get("/annonces");
    },
    getAnnonce(id){
        return apiClient.get('/annonces/' + id)
    },
    postAnnonce(annonce){
        return apiClient.post('/annonces', annonce)
    }

}