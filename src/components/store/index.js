// import dependency to handle HTTP request to our back end
// import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios';

Vue.use(Vuex);


//to handle state
const state = {
    users: [
       
   ]
}

//to handle state

//to handle actions
const actions = {
   async getUsers({ commit }) {
      await  axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
            commit('SET_USERS', response.data.slice(0, 24) )
        })

    }
}

//to handle mutations
const mutations = {
    SET_USERS(state, users) {
        state.users=users
    }
}

//export store module
export default new Vuex.Store( {
    state,
  
    actions,
    mutations
})