import axios from 'axios'
import router from '../../router'

const state = {
    token: localStorage.getItem('token') || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
    loader: false,
}

const mutations = {
    authUser(state, userData){
        state.token = userData.token
    },
    storeUser(state, user) {
        state.user = user
    },
    activateLoder(state){
        state.loader = true;
    },
    deactivateLoder(state){
        state.loader = false;
    },
    logout(state){
        state.token = null
    }
}

const actions = {
    register(context, authData){
        context.commit('activateLoder');
        return new Promise((resolve, reject) => {
        axios
            .post('/register', authData)
                .then(response => {
                    context.commit('deactivateLoder');
                    context.commit('displayAlert', {
                        message: 'Your account was created succesfully, you will be redirected',
                        color: 'success'
                    });
                    resolve(response)
                })
                .catch(error => {
                    context.commit('deactivateLoder');
                    context.commit('displayAlert', {
                        message: 'An error occured, please check your details and try again later!',
                        color: 'red'
                    });
                    reject(error);
                })
        })
    },

    login(context, userData){
        context.commit('activateLoder');
        return new Promise((resolve, reject) => {
            axios.post('/login', userData)
                .then(response => {
                    context.commit('deactivateLoder');
                    context.commit('displayAlert', {
                        message: 'Login was succesfully, You will be redirected to previous page',
                        color: 'success'
                    });
                    let accessToken = response.data.access_token;
                    let expiresIn = response.data.expires_in
                    context.commit('authUser', { token: accessToken });
                    localStorage.setItem('token', accessToken);
                    localStorage.setItem('expires_in', expiresIn);
                    context.dispatch('getLoggedUser');
                    resolve(response)
                })
                .catch(error => {
                    context.commit('deactivateLoder');
                    context.commit('displayAlert', {
                        message: 'Sorry an error occured!, Please check and try again',
                        color: 'red'
                    });
                    reject(error);
                })
        }); 
    },

    logout(context){
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
        axios.post('/logout')
            .then(response => {
                context.commit('logout');
                localStorage.removeItem('token');
                localStorage.removeItem('expires_in');
                localStorage.removeItem('user');
                router.replace('/login')
            })
            .catch(error => console.log(error))
    },

    getLoggedUser(context){
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
        axios.get('/auth-user')
            .then(response => {
                let user = JSON.stringify(response.data);
                context.commit('storeUser', response.data);
                localStorage.setItem('user', user);
            })
            .catch(error => console.log(error.response.data.errors));
    },

    deactivateSnackbar(context){
        context.commit('hideAlert');
    },

}

const getters = {
    isAuthenticated(state){
        return state.token !== null;
    },
    loggedUser(state){
        return state.user;
    },
    loader(state){
        return state.loader;
    }
}


export default {
    state,
    mutations,
    actions,
    getters
}
