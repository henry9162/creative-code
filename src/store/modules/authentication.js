import axios from 'axios'

const state = {
    token: null,
    userId: null,
    user: null,
    loader: false,
    errors: [],
    snackBar: true,
    alertMessage: '',
    alertColor: ''
}

const mutations = {
    authUser(state, userData){
        state.token = userData.token
        state.userId = userData.id
    },
    activateLoder(state){
        state.loader = true;
    },
    deactivateLoder(state){
        state.loader = false;
    },
    displayServerError(state, errors){
        state.errors = errors;
    },
    displayAlert(state, alertData){
        state.snackBar = true;
        state.alertMessage = alertData.message;
        state.alertColor = alertData.color
    },
    hideAlert(state){
        state.snackBar = false;
    },
}

const actions = {
    register(context, authData){
        context.commit('activateLoder');
        return new Promise((resolve, reject) => {
        axios
            .post('/register', authData)
                .then(response => {
                    console.log(response);
                    context.commit('deactivateLoder');
                    context.commit('displayAlert', {
                        message: 'Your account was created succesfully',
                        color: 'success'
                    });
                    resolve(response)
                })
                .catch(error => {
                    context.commit('deactivateLoder');
                    console.log(error.response.data.errors);
                    let errors = error.response.data.errors;
                    context.commit('displayServerError', errors);
                    context.commit('displayAlert', {
                        message: 'Sorry, an error occured!',
                        color: 'red'
                    });
                    reject(error);
                })
        })
    },

    deactivateSnackbar(context){
        context.commit('hideAlert');
    },

    login(context, userData){
        axios.
            post('/login', userData)
                .then(response => {
                    console.log(response);
                    // context.commit('authUser', {
                    //     token: response.data.access_token,
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
    },
    loader(state){
        return state.loader;
    },
    serverErrors(state){
        return state.errors;
    },
    snackBar(state){
        return state.snackBar;
    },
    alertMessage(state){
        return state.alertMessage;
    },
    alertColor(state) {
        return state.alertColor;
    }
}


export default {
    state,
    mutations,
    actions,
    getters
}
