const state = {
    snackBar: true,
    alertMessage: '',
    alertColor: ''
}

const mutations = {
    displayAlert(state, alertData){
        state.snackBar = true;
        state.alertMessage = alertData.message;
        state.alertColor = alertData.color
    },
    hideAlert(state){
        state.snackBar = false;
    },
}

const getters = {
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
    state, mutations, getters
}