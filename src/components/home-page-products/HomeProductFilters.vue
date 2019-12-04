<template>
    <div>
        <!-- Filter Buttons -->
        <v-container fluid>
            <v-row class="mx-4">
                <v-col>
                    <div class="filter-products">
                        <div class="filters" >
                            <v-hover v-for="(filter, i) in filters" :key="i" v-slot:default="{ hover }">
                                <v-btn tile height="60" @click="filterButtons(filter)" x-large :class="hover || active == filter.title ? 'white--text' : 'border grey--text text--darken-3'" :color="hover || active == filter.title ? 'rgba(231, 40, 77, 1)' : ''" depressed light>
                                    <span class="font-weight-black" v-text="filter.title"></span>
                                    <div :class="active == filter.title ? 'arrow-down' : ''"></div>
                                </v-btn>
                            </v-hover>
                        </div>
                        <div class="all-categories-filter">
                            <v-hover v-slot:default="{ hover }">
                                <v-btn @click="$router.push({ name: 'allProduct' })" tile height="60" x-large :class="hover ? 'white--text' : 'border grey--text text--darken-3'" :color="hover ? 'rgba(231, 40, 77, 1)' : ''" depressed>
                                    <span>
                                        <v-btn depressed class="mr-2" max-width="20" height="20" :color="hover ? '#fff' : 'rgba(231, 40, 77, 1)'" fab x-small dark>
                                            <v-icon :class="hover ? 'red--text' : ''" x-small>mdi-arrow-right</v-icon>
                                        </v-btn>    
                                    </span> 
                                    <span class="font-weight-black">
                                        See All Products
                                    </span>
                                </v-btn>
                            </v-hover>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>

        <!-- Product Cards -->
        <product-modal @cartAdded="activateSnackbar"></product-modal>

        <div class="mx-8">
            <product-list :visible="true" :gridValue="4" :products="products"></product-list>
        </div>  
        
        <!-- Deals -->
        <deals />

    </div>
</template>

<script>
import productModal from './ProductModal'
import deals from './Deals'
import productList from '../ProductList'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    components: { productModal, deals, productList },

    data: () => ({
        active: 'Latest',
        filters: [ { title:  'Latest'}, { title: 'Featured' }, { title: 'Women' }, { title: 'Men' }, { title: 'Kids' } ],
        products: [],
        snackbar: false,
    }),

    computed: {
        ...mapGetters({
            allProducts: 'products',
            show: 'show',
            productId: 'productId',
            quantity: 'quantity'
        }),
    },

    methods: {
        ...mapActions({
            toggleProductDropdown: 'toggleProductDropdown',
            activateSnackbar: 'activateSnackbar',
            addToCart: 'addToCart'
        }),
        
        filterButtons(filterTitle){
            this.active = filterTitle.title;
            this.selectFilter(filterTitle.title);
        },

        selectFilter(title){
            if (title == 'Latest') this.products = this.allProducts.sort((a, b) => (a.date > b.date) ? -1 : 1);
            if (title == 'Featured') this.products = this.allProducts.filter(product => product.featured == true);
            if (title == 'Men') this.products = this.allProducts.filter(product => product.category.name == 'Men');
            if (title == 'Women') this.products = this.allProducts.filter(product => product.category.name == 'Women');
            if (title == 'Kids') this.products = this.allProducts.filter(product => product.category.name == 'Kids');
        },
    },

    created() {
        this.selectFilter('Latest');
    }
}
</script>