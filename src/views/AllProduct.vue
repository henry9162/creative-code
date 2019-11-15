<template>
    <div>
        <!-- Breadcrumbs -->
        <div class="d-flex justify-center">
            <v-breadcrumbs class="pa-4" :items="items" small></v-breadcrumbs>
        </div>

        <!-- Product title parallax -->
        <titleParalax>All Product</titleParalax>

        <v-container class="white px-0 pt-0 pb-0" fluid>
            <v-row class="white mx-0 px-0 pb-0">
                <v-col class="px-0" md="3" style="border-right: 1px solid lightgrey">
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
                                            <v-checkbox class="mt-0" v-model="outOfStock" label="Out Of Stock"></v-checkbox>
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

                                <v-list-group v-for="(category, i) in categories" :key="i" no-action sub-group value="true">
                                    <template v-slot:activator>
                                        <v-list-item-content>
                                            <v-list-item-title v-text="category.name"></v-list-item-title>
                                        </v-list-item-content>
                                    </template>

                                    <v-list-item v-for="(subcategory, i) in category.subcategories" :key="i" @click="">
                                        <v-list-item-title v-text="subcategory.name"></v-list-item-title>
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
                                            <div class="d-flex">
                                                <v-checkbox class="mt-0" v-model="sizesCheckbox.xs" label="XS"></v-checkbox>
                                                <v-btn style="width: 22px; height: 22px" class="ml-2 mt-1 px-0" depressed x-small fab color="red" dark>3</v-btn>
                                            </div>
                                            <div class="d-flex">
                                                <v-checkbox class="mt-0" v-model="sizesCheckbox.s" label="S"></v-checkbox>
                                                <v-btn style="width: 22px; height: 22px" class="ml-2 mt-1 px-0" depressed x-small fab color="red" dark>5</v-btn>
                                            </div>
                                            <div class="d-flex">
                                                <v-checkbox class="mt-0" v-model="sizesCheckbox.m" label="M"></v-checkbox>
                                                <v-btn style="width: 22px; height: 22px" class="ml-2 mt-1 px-0" depressed x-small fab color="red" dark>10</v-btn>
                                            </div>
                                            <div class="d-flex">
                                                <v-checkbox class="mt-0" v-model="sizesCheckbox.l" label="L"></v-checkbox>
                                                <v-btn style="width: 22px; height: 22px" class="ml-2 mt-1 px-0" depressed x-small fab color="red" dark>4</v-btn>
                                            </div>
                                            <div class="d-flex">
                                                <v-checkbox class="mt-0" v-model="sizesCheckbox.xl" label="XL"></v-checkbox>
                                                <v-btn style="width: 22px; height: 22px" class="ml-2 mt-1 px-0" depressed x-small fab color="red" dark>1</v-btn>
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
                                                            <v-img :aspect-ratio="16/9" :src="brand.logo"></v-img>
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
                                            <div class="d-flex">
                                                <v-checkbox class="mt-0" v-model="materialsCheckbox.ankara" label="Ankara"></v-checkbox>   
                                            </div>
                                            <div class="d-flex">
                                                <v-checkbox class="mt-0" v-model="materialsCheckbox.lace" label="Lace"></v-checkbox>  
                                            </div>
                                            <div class="d-flex">
                                                <v-checkbox class="mt-0" v-model="materialsCheckbox.shifon" label="Shifon"></v-checkbox>  
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
                                            <div class="d-flex">
                                                <v-checkbox class="mt-0" v-model="stylesCheckbox.casual" label="Catual"></v-checkbox>
                                                <v-btn style="width: 22px; height: 22px" class="ml-2 mt-1 px-0" depressed x-small fab color="red" dark>3</v-btn>
                                            </div>
                                            <div class="d-flex">
                                                <v-checkbox class="mt-0" v-model="stylesCheckbox.formal" label="Formal"></v-checkbox>
                                                <v-btn style="width: 22px; height: 22px" class="ml-2 mt-1 px-0" depressed x-small fab color="red" dark>5</v-btn>
                                            </div>
                                            <div class="d-flex">
                                                <v-checkbox class="mt-0" v-model="stylesCheckbox.daytime" label="Daytime"></v-checkbox>
                                                <v-btn style="width: 22px; height: 22px" class="ml-2 mt-1 px-0" depressed x-small fab color="red" dark>10</v-btn>
                                            </div>
                                            <div class="d-flex">
                                                <v-checkbox class="mt-0" v-model="stylesCheckbox.party" label="Party"></v-checkbox>
                                                <v-btn style="width: 22px; height: 22px" class="ml-2 mt-1 px-0" depressed x-small fab color="red" dark>4</v-btn>
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
                            <v-list-group v-model="expandBrands" no-action>
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
                                                            <div style="width: 100%; height: 50px;" :class="color.name"></div>
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

                <!-- Products lists -->
                <v-col md="9">
                    <!-- Product Cards -->
                <product-modal @cartAdded="$store.dispatch('activateSnackbar')"></product-modal>
                    <product-list></product-list>
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
    components: { titleParalax, productModal, productList },

    mixins: [ breadcrumbs ],

    data: () => ({
        expandPrice: true,
        expandAvailability: false,
        expandCategories: false,
        expandSizes: true,
        expandMaterials: false,
        expandStyles: true,
        expandBrands: true,
        min: 0,
        max: 30000,
        range: [0, 30000],
        inStock: false,
        outOfStock: false,
        open: false,
        sizesCheckbox: { xs: false, s: false, m: false, l: false, xl: false },
        materialsCheckbox: { ankara: false, lace: false, shifun: false },
        stylesCheckbox: { casual: false, formal: false, daytime: false, party: false },
    }),

    computed: {
        ...mapGetters({
            categories: 'getCategories',
            styles: 'getStyles',
            materials: 'getMaterials',
            colors: 'getColors',
            brands: 'getBrands'
        }),
    },

    created() {
        this.$store.dispatch('getAllCategories');
        this.$store.dispatch('getAllStyles');
        this.$store.dispatch('getAllMaterials');
        this.$store.dispatch('getAllColors');
        this.$store.dispatch('getAllBrands');
    }

}

</script>
