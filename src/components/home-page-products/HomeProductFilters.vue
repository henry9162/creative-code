<template>
    <div>
        <!-- SnackBar -->
        <v-snackbar :timeout=2000 top right v-model="snackbar">
            <span class="green--text">Success!..</span> You have added <span class="yellow--text mx-1" v-text="productModal.title"></span> to cart
            <v-btn color="white" text @click="snackbar = false">
                <v-icon>mdi-close-outline</v-icon>
            </v-btn>
        </v-snackbar>

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
                                <v-btn tile height="60" x-large :class="hover ? 'white--text' : 'border grey--text text--darken-3'" :color="hover ? 'rgba(231, 40, 77, 1)' : ''" depressed>
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

        <v-container class="pt-0" fluid>
            <v-row class="mx-4">
                <v-col v-for="product in products" :key="product.id" md="3">
                    <v-hover v-slot:default="{ hover }">
                        <v-card color="white" max-width="400" :elevation="hover ? 20 : 1">
                            <v-img :aspect-ratio="16/12" :src="product.image">
                                <v-expand-transition>
                                    <div v-if="hover"
                                        class="d-flex transition-fast-in-fast-out darken-2 font-weight-bold v-card--reveal display-3 white--text"
                                        :class="product.color"
                                        style="height: 100%;"
                                    >
                                        <v-btn @click="$modal.show('product-modal', { product: product })" fab>
                                            <v-icon large>mdi-magnify-plus-cursor</v-icon>
                                        </v-btn>
                                    
                                </div>
                                </v-expand-transition>

                                <div class="product-label-div">
                                    <div class="product-labels-left">
                                        <div class="product-labels-left-btn mt-10">
                                            <v-btn class="ml-0" min-width="180" tile rounded small :color="product.color + ' darken-3'" dark>Custom Labels</v-btn>
                                        </div>
                                    </div>
                                    <div class="product-labels-right">
                                        <div class="my-1">
                                            <v-btn rounded x-small color="orange" dark>
                                                Premium <v-icon small right>mdi-star</v-icon>
                                            </v-btn>
                                        </div>
                                        <div class="text-right mr-1 my-1"><v-btn fab x-small color="primary" dark>New</v-btn></div>
                                        <div class="text-right mr-1 my-1"><v-btn fab x-small class="black--text" color="yellow" dark>Hot</v-btn></div>
                                        <div class="text-right mr-1 my-1"><v-btn fab x-small color="danger" dark>Hot</v-btn></div>
                                    </div>
                                </div>
                            </v-img>

                            <v-card-text class="pt-6" style="position: relative;">
                                <v-hover v-slot:default="{ hover }">
                                    <v-btn :elevation="hover ? 12 : 2" absolute :color="product.color" class="white--text" fab small right top>
                                        <v-icon>mdi-cart</v-icon>
                                    </v-btn>
                                </v-hover>
                                <div class="font-weight-light grey--text subtitle-2 mb-1">For the perfect meal</div>
                                <div style="display: flex; justify-content: space-between; max-height: 20px">
                                    <h3 class="subtitle-1 font-weight-bold grey--text text--darken-3" v-text="product.title"></h3>
                                    <h3 class="font-weight-black title" v-text="'$' + product.price"></h3>
                                </div>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn x-small text>
                                    <v-icon small color="green darken-1" class="mr-1">mdi-currency-ngn</v-icon> Buy Now
                                </v-btn>
                                <v-btn x-small text color="purple">
                                    <v-icon left>mdi-email-outline</v-icon> Ask Question
                                </v-btn>

                                <div class="flex-grow-1"></div>

                                <v-btn icon @click="toggleProductDropdown(product.id)">
                                    <v-icon>{{ show == true && productId == product.id ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                            </v-card-actions>

                            <v-expand-transition>
                                <div v-show="show == true && productId == product.id">
                                    <v-card-text>
                                        {{ product.description }}
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>

        <deals />

    </div>
</template>

<script>
import productList from '../../api/products.js'
import productModal from './ProductModal'
import deals from './Deals'

export default {
    components: { productModal, deals },

    data: () => ({
        active: 'Featured',
        filters: [ { title:  'Featured'}, { title: 'Latest' }, { title: 'Women' }, { title: 'Men' }, { title: 'Kids' } ],
        show: false,
        productId: '',
        products: [],
        snackbar: false,
        productModal: {}
    }),

    computed: {
        featured() { return productList.filter(product => product.featured == true); },
        latest() { return productList.sort((a, b) => (a.date > b.date) ? -1 : 1); },
        men() { return productList.filter(product => product.category == 'men'); },
        women() { return productList.filter(product => product.category == 'women'); },
        kids() { return productList.filter(product => product.category == 'kids'); },
    },

    methods: {
        toggleProductDropdown(id) {
            this.productId = id;
            this.show = !this.show;
        },
        filterButtons(filterTitle){
            this.active = filterTitle.title;
            this.selectFilter(filterTitle.title);
        },
        selectFilter(title){
            if (title == 'Featured') this.products = this.featured;
            if (title == 'Latest') this.products = this.latest;
            if (title == 'Men') this.products = this.men;
            if (title == 'Women') this.products = this.women;
            if (title == 'Kids') this.products = this.kids;
        },
        activateSnackbar(product){
            this.snackbar = true;
            this.productModal = product;
        }
    },

    created() {
        this.products = this.featured;
    }
}
</script>