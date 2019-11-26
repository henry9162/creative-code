<template>
    <div>
        <!-- Breadcrumbs -->
        <div class="d-flex justify-center">
            <v-breadcrumbs class="pa-4" :items="items" small></v-breadcrumbs>
        </div>

        <!-- Product title parallax -->
        <titleParalax>{{ name }}</titleParalax>

        <v-container class="white px-0 pt-0 pb-0" fluid>
            <v-row class="white mx-0 px-0 pb-0">
                <transition enter-active-class="animated pulse" mode="out-in">
                    <v-col v-if="visible" class="px-0" md="3" style="border-right: 1px solid lightgrey">
                        <div class="px-4 pt-2">
                            <div class="title font-weight-bold text-uppercase">Filters</div>
                            <v-divider class="mt-2"></v-divider>
                        </div>
                        <!-- Price -->
                        <div class="px-4 pt-2">
                            <v-list>
                                <v-list-group v-model="expandPrice" no-action>
                                    <template v-slot:activator>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                <div class="grey--text text--darken-2 font-weight-bold">Price</div>
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </template>
                                    <v-list-item class="pl-0" @click="">
                                        <v-list-item-content>
                                            <div class="px-3">
                                                <v-range-slider v-model="range" :max="max" :min="min" hide-details class="align-center"></v-range-slider>
                                                <div class="d-flex justify-space-between">
                                                    <div>
                                                        <v-text-field v-model="range[0]" class="mt-0 pt-0" prepend-icon="mdi-currency-ngn" hide-details single-line type="number" style="width: 100px"></v-text-field>
                                                    </div>
                                                    <div>
                                                        <v-text-field v-model="range[1]" class="mt-0 pt-0" prepend-icon="mdi-currency-ngn" hide-details single-line type="number" style="width: 100px"></v-text-field>
                                                    </div>   
                                                </div>    
                                            </div>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-group>
                            </v-list>
                        </div>
                        <!-- Availability -->
                        <div class="px-4">
                            <v-list class="pb-0">
                                <v-list-group v-model="expandAvailability" no-action>
                                    <template v-slot:activator>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                <div class="grey--text text--darken-2 font-weight-bold">Availability</div>
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </template>
                                    <v-list-item class="pl-0 pb-0" @click="">
                                        <v-list-item-content class="pb-0">
                                            <div class="px-3">
                                                <v-checkbox class="mt-0" v-model="inStock" label="In Stock"></v-checkbox>
                                            </div>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-group>
                            </v-list>
                        </div>
                        <!-- Categories -->
                        <div class="px-4">
                            <v-list>
                                <v-list-group v-model="expandCategories">
                                    <template v-slot:activator>
                                        <v-list-item-title>
                                            <div class="grey--text text--darken-2 font-weight-bold">Categories</div>
                                        </v-list-item-title>
                                    </template>

                                    <v-list-group v-for="(category, i) in categories" :key="i" no-action sub-group>
                                        <template v-slot:activator>
                                            <v-list-item-content>
                                                <v-list-item-title v-text="category.name"></v-list-item-title>
                                            </v-list-item-content>
                                        </template>

                                        <v-list-item v-for="(subcategory, index) in category.subcategories" :key="index" @click="">
                                            <v-list-item-title @click="$store.dispatch('displayBaseFilter', { name: subcategory.name, type: 'subcategory' });" v-text="subcategory.name"></v-list-item-title>
                                        </v-list-item>
                                    </v-list-group>
                                </v-list-group>
                            </v-list>
                        </div>
                        <!-- Sizes -->
                        <div class="px-4">
                            <v-list class="pb-0">
                                <v-list-group v-model="expandSizes" no-action>
                                    <template v-slot:activator>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                <div class="grey--text text--darken-2 font-weight-bold">Sizes</div>
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </template>
                                    <v-list-item class="pl-0" @click="">
                                        <v-list-item-content class="pb-0">
                                            <div class="px-3">
                                                <div v-for="size in sizes" :key="size.id" class="d-flex">
                                                    <v-checkbox class="mt-0" @change="onChangeSelectbox($event, size.name, 'sizes')" :label="size.name"></v-checkbox>
                                                    <v-btn style="width: 22px; height: 22px" class="ml-2 mt-1 px-0" depressed x-small fab color="red" dark>3</v-btn>
                                                </div>
                                            </div>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-group>
                            </v-list>
                        </div>
                        <!-- Brands -->
                        <div class="px-4">
                            <v-list class="pb-0">
                                <v-list-group v-model="expandBrands" no-action>
                                    <template v-slot:activator>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                <div class="grey--text text--darken-2 font-weight-bold">Brands</div>
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </template>
                                    <v-list-item class="pl-0" @click="">
                                        <v-list-item-content class="pb-0">
                                            <v-row class="px-4">
                                                <v-col v-for="brand in brands" :key="brand.id" md="4" class="pa-1">
                                                    <v-tooltip color="primary" top>
                                                        <template v-slot:activator="{ on }">
                                                            <v-card v-on="on" flat tile>
                                                                <v-img @click="$store.dispatch('displayBaseFilter', { name: brand.name, type: 'brand' });" :aspect-ratio="16/9" :src="brand.logo"></v-img>
                                                            </v-card>
                                                        </template>
                                                        <span v-text="brand.name"></span>
                                                    </v-tooltip>
                                                </v-col>
                                            </v-row>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-group>
                            </v-list>
                        </div>
                        <!-- Materials -->
                        <div class="px-4">
                            <v-list class="pb-0">
                                <v-list-group v-model="expandMaterials" no-action>
                                    <template v-slot:activator>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                <div class="grey--text text--darken-2 font-weight-bold">Materials</div>
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </template>
                                    <v-list-item class="pl-0" @click="">
                                        <v-list-item-content class="pb-0">
                                            <div class="px-3">
                                                <div v-for="material in materials" :key="material.id" class="d-flex">
                                                    <v-checkbox @change="onChangeSelectbox($event, material.name, 'materials')" class="mt-0" :label="material.name"></v-checkbox>   
                                                </div>
                                            </div>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-group>
                            </v-list>
                        </div>
                        <!-- Styles -->
                        <div class="px-4">
                            <v-list class="pb-0">
                                <v-list-group v-model="expandStyles" no-action>
                                    <template v-slot:activator>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                <div class="grey--text text--darken-2 font-weight-bold">Styles</div>
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </template>
                                    <v-list-item class="pl-0" @click="">
                                        <v-list-item-content class="pb-0">
                                            <div class="px-3">
                                                <div v-for="style in styles" :key="style.id" class="d-flex">
                                                    <v-checkbox @change="onChangeSelectbox($event, style.name, 'styles')" class="mt-0" :label="style.name"></v-checkbox>
                                                    <v-btn style="width: 22px; height: 22px" class="ml-2 mt-1 px-0" depressed x-small fab color="red" dark>3</v-btn>
                                                </div>
                                            </div>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-group>
                            </v-list>
                        </div>
                        <!-- Colors -->
                        <div class="px-4">
                            <v-list class="pb-0">
                                <v-list-group v-model="expandColors" no-action>
                                    <template v-slot:activator>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                <div class="grey--text text--darken-2 font-weight-bold">Colors</div>
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </template>
                                    <v-list-item class="pl-0" @click="">
                                        <v-list-item-content class="pb-0">
                                            <v-row class="px-4">
                                                <v-col v-for="color in colors" :key="color.id" md="4" class="pa-1">
                                                    <v-tooltip :color="color.name" top>
                                                        <template v-slot:activator="{ on }">
                                                            <v-card v-on="on" flat tile>
                                                                <div @click="$store.dispatch('displayBaseFilter', { name: color.name, type: 'color' });" style="width: 100%; height: 50px;" :class="color.name"></div>
                                                            </v-card>
                                                        </template>
                                                        <span v-text="color.name"></span>
                                                    </v-tooltip>
                                                </v-col>
                                            </v-row>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-group>
                            </v-list>
                        </div>
                    </v-col>
                </transition>

                <!-- Products lists -->
                <v-col :md="visible ? '9' : '12'">
                    <div class="header mt-5 mb-2">
                        <div class="d-flex px-2 justify-space-between">
                            <div>
                                <v-btn v-if="visible" depressed @click="toggleVisibility('hidden')" small tile color="red" dark>
                                    <v-icon small left>mdi-arrow-left</v-icon> Hide Filter
                                </v-btn>
                                <v-btn v-if="!visible" depressed @click="toggleVisibility('open')" small tile color="blue" dark>
                                    Open Filter <v-icon small right>mdi-arrow-right</v-icon>
                                </v-btn>
                            </div>
                            <div class="d-flex">
                                <div class="blue--text mt-1 mr-2">Change Layout</div>
                                <div class="d-flex">
                                    <v-tooltip color="primary" top>
                                        <template v-slot:activator="{ on }">                                   
                                            <v-icon class="font-weight-bold mx-2 black--text" @click="changeGrid('3')" v-on="on">mdi-format-list-bulleted</v-icon>                                   
                                        </template>
                                        <span>3 Grid View</span>
                                    </v-tooltip>

                                    <v-tooltip color="primary" top>
                                        <template v-slot:activator="{ on }">                                   
                                            <v-icon class="font-weight-bold black--text mx-2" @click="changeGrid('4')" v-on="on">mdi-filter-variant</v-icon>                               
                                        </template>
                                        <span>4 Grid View</span>
                                    </v-tooltip>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Product Cards -->
                    <product-modal @cartAdded="$store.dispatch('activateSnackbar')"></product-modal>
                    <transition enter-active-class="animated pulse" leave-active-class="animated fadeOut" mode="out-in">
                        <product-list :visible="visible" :gridValue="gridValue" :products="products"></product-list>
                    </transition>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import breadcrumbs from '../mixins/breadcrumbs.js'
import titleParalax from '../components/TitleParalax'
import productModal from '../components/home-page-products/ProductModal'
import productList from '../components/ProductList'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    props: ['name'],

    components: { titleParalax, productModal, productList },

    mixins: [ breadcrumbs ],

    data: () => ({
        expandPrice: true,
        expandAvailability: false,
        expandCategories: false,
        expandSizes: true,
        expandMaterials: false,
        expandStyles: true,
        expandBrands: false,
        expandColors: true,
        min: 0,
        max: 30000,
        range: [0, 30000],
        inStock: false,
        outOfStock: false,
        open: false,
        gridValue: '',
        visible: true
    }),

    computed: {
        ...mapGetters({
            allProducts: 'filteredProducts',
            categories: 'getCategories',
            styles: 'getStyles',
            materials: 'getMaterials',
            colors: 'getColors',
            brands: 'getBrands',
            sizes: 'getSizes'
        }),
        products(){
            return this.getAllProducts().filter(product => {
                return this.inStock ? product.price > this.range[0] && product.price < this.range[1] && product.inventory > 0 : product.price > this.range[0] && product.price < this.range[1];
            })
        }
    },

     methods: {
        getAllProducts() { return this.allProducts.sort((a, b) => (a.date > b.date) ? -1 : 1); },

        onChangeSelectbox(event, name, type) {
            let payload = { name: name, type: type}
            if (event) {
                this.$store.dispatch('addToFilter', payload);
            } else {
                this.$store.dispatch('removeFromFilter', payload);
            }
        },

        changeGrid(value) {
            this.gridValue = value
        },

        toggleVisibility(mode) {
            if (mode == 'hidden') this.visible = false
            if (mode == 'open') this.visible = true
        },
    },

    mounted() {
        console.log(this.name);
        if (this.name && this.name != 'All-Product') {
            this.$store.dispatch('categoryProducts', this.name)
            this.expandCategories = true
            this.expandPrice = false
            this.expandSizes = false
            this.expandStyles = false
            this.expandColors = false
        }
    },

    created() {
        this.$store.dispatch('getAllCategories');
        this.$store.dispatch('getAllStyles');
        this.$store.dispatch('getAllMaterials');
        this.$store.dispatch('getAllColors');
        this.$store.dispatch('getAllBrands');
        this.$store.dispatch('getAllSizes');
    }

}

</script>
