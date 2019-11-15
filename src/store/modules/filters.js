import { categories, styles, materials, colors, brands } from '../../api/productRelatedTables'

const state = {
    categories: [],
    styles: [],
    materials: [],
    colors: [],
    brands: []
}

const mutations = {
    setCategories(state, payload){
        state.categories = payload;
    },
    setStyles(state, payload) {
        state.styles = payload;
    },
    setMaterials(state, payload) {
        state.materials = payload;
    },
    setColors(state, payload) {
        state.colors = payload;
    },
    setBrands(state, payload) {
        state.brands = payload;
    }
}

const actions = {
    getAllCategories(context){
        context.commit('setCategories', categories);
    },
    getAllStyles(context) {
        context.commit('setStyles', styles);
    },
    getAllMaterials(context) {
        context.commit('setMaterials', materials);
    },
    getAllColors(context) {
        context.commit('setColors', colors);
    },
    getAllBrands(context) {
        context.commit('setBrands', brands);
    }
}

const getters = {
    getCategories(state){ return state.categories },

    getStyles(state){ return state.styles },

    getMaterials(state) { return state.materials },

    getColors(state) { return state.colors },
    getBrands(state) { return state.brands }
}

export default {
    state, 
    mutations,
    actions,
    getters,
}