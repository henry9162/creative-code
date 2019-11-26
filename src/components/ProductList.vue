<template>
    <div>
        <v-container class="pt-0" fluid>
            <v-row>
                <v-col class="px-2" v-for="product in products" :key="product.id" :md="gridValue == 3 ? '4' : gridValue == 4 ? '3' : '3'">
                    <v-hover v-slot:default="{ hover }">
                        <v-card flat color="white" max-width="400" :elevation="hover ? 20 : ''">
                            <v-img :aspect-ratio="16/12" :src="product.image_front">
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
                                        <div class="product-labels-left-div mt-5">
                                            <div style="min-width: 180px" class="py-1 px-8 font-weight-bold white--text caption" :class="product.color.name">Custom Labels</div>
                                            <!-- <v-btn class="ml-0" min-width="180" tile rounded x-small :color="product.color + ' darken-3'" dark>Custom Labels</v-btn> -->
                                        </div>
                                    </div>
                                    <div class="product-labels-right">
                                        <div class="my-1">
                                            <v-btn depressed rounded x-small color="orange" dark>
                                                Premium <v-icon x-small>mdi-star</v-icon>
                                            </v-btn>
                                        </div>
                                        <div class="text-right mr-1 my-1"><v-btn depressed fab x-small color="primary" dark>New</v-btn></div>
                                        <div class="text-right mr-1 my-1"><v-btn depressed fab x-small class="black--text" color="yellow" dark>Hot</v-btn></div>
                                        <div class="text-right mr-1 my-1"><v-btn depressed fab x-small color="danger" dark>Hot</v-btn></div>
                                    </div>
                                </div>
                            </v-img>

                            <v-card-text class="pt-6" style="position: relative;">
                                <v-hover v-slot:default="{ hover }">
                                    <v-btn :elevation="hover ? 12 : 2" absolute :color="product.color.name" class="white--text" fab small right top
                                        @click="addToCart({ productId: product.id, quantity: quantity, inventory: product.inventory })">
                                        <v-icon>mdi-cart</v-icon>
                                    </v-btn>
                                </v-hover>
                                <div class="font-weight-light grey--text subtitle-2 mb-1">For the perfect meal</div>
                                <div style="display: flex; justify-content: space-between; max-height: 20px">
                                    <div class="subtitle-1 font-weight-bold grey--text text--darken-3" v-text="product.title"></div>
                                    <h3 class="font-weight-black title ml-1" v-text="'$' + product.price"></h3>
                                </div>
                            </v-card-text>

                            
                            <div class="d-flex pb-2 justify-space-between">
                                <div class="d-flex pt-4 pl-4">
                                    <v-btn class="px-0 mr-2" x-small text>
                                        <v-icon small color="green darken-1" class="mr-1">mdi-currency-ngn</v-icon> Buy Now
                                    </v-btn>
                                    <v-btn class="px-0" x-small text color="purple">
                                        <v-icon small>mdi-email-outline</v-icon> Ask Question
                                    </v-btn>
                                </div>

                                <!-- <div class="flex-grow-1"></div> -->

                                <v-btn class="mt-2" icon @click="toggleProductDropdown(product.id)">
                                    <v-icon>{{ show == true && productId == product.id ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                            </div>
                            

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
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    props: ['products', 'gridValue', 'visible'],

    computed: {
        ...mapGetters({
            show: 'show',
            productId: 'productId',
            quantity: 'quantity',
        }),
    },

    methods: {
        ...mapActions({
            toggleProductDropdown: 'toggleProductDropdown',
            // activateSnackbar: 'activateSnackbar',
            addToCart: 'addToCart',
        }),
    }

}
</script>