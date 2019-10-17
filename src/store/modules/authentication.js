import axios from 'axios'

const state = {
    token: null,
    userId: null,
    user: null
}

const mutations = {
    authUser(state, userData){
        state.token = userData.token
        state.userId = userData.id
    }
}

const actions = {
    register(context, authData){
        axios
            .post('/register', authData)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error.response.data.errors);
                })
    },

    login(context, userData){
        axios.
            post('/login', userData)
                .then(response => {
                    console.log(response);
                    // context.commit('authUser', {
                    //     token: response.data.user_token,
                    //     id: response.data.id,
                    // })
                })
                .catch(error => {
                    console.log(error.response.data.errors);
                })
    }
}

const getters = {
    isAuthenticated(state){
        return state.token !== null;
    },
    loggedUser(state){
        return state.user;
    }
}


export default {
    state,
    mutations,
    actions,
    getters
}
