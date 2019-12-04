<template>
    <!-- Deals of the week -->
    <v-container fluid>
        <v-row class="mx-4">
            <v-col md="12">
                <v-card flat>
                    <v-row class="px-3">   
                        <div class="d-flex red white--text px-4 pt-5 justify-space-between" style="width: 100%">
                            <div class="title">
                                <p>Deals Of The Day</p>
                            </div>
                            <div class="title">
                                <p>
                                    Time Left<span class="font-weight-thin">: </span>
                                    <span>20h : </span>
                                    <span>52m : </span>
                                    <span>20s </span>
                                </p>
                            </div>
                            <div class="title">
                                <v-btn text dark>SEE ALL ></v-btn>
                            </div>
                        </div>
                    </v-row>

                    <product-list :visible="true" :gridValue="4" :products="deals"></product-list>
                    
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import cart from '../../mixins/Carts.js'
import productList from '../ProductList'

export default {
    components: { productList },

    mixins: [cart],


    data: () => ({
        show: false,
        productId: '',
    }),

    computed: {
        deals() { return this.$store.getters.products.slice(0, 4) }
    },

    methods: {
        ...mapActions({
            fetchProducts: 'getAllProducts',
        }),
         toggleProductDropdown(id) {
            this.productId = id;
            this.show = !this.show;
        },
    },

    created() {
        this.fetchProducts();
    }
}
</script>