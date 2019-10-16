<template>
    <!-- Deals of the week -->
    <v-container fluid>
        <v-row class="mx-4">
            <v-col md="12">
                <v-card>
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

                    <v-row class="px-5 pt-2">
                        <v-col v-for="product in deals" :key="product.id" md="3">
                            <v-hover v-slot:default="{ hover }">
                                <v-card color="white" max-width="400" :elevation="hover ? 20 : 0">
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
                                            <v-card-text v-text="product.description"></v-card-text>
                                        </div>
                                    </v-expand-transition>
                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import productList from '../../api/products.js'
export default {
    data: () => ({
        show: false,
        productId: '',
    }),

    computed: {
        deals() { return productList.slice(0, 4); },
    },

    methods: {
         toggleProductDropdown(id) {
            this.productId = id;
            this.show = !this.show;
        },
    }
}
</script>