<template>
    <div>
        <div class="d-flex justify-center">
            <v-breadcrumbs class="pa-2" :items="items" small></v-breadcrumbs>
        </div>

        <div>
            <v-parallax height="85" dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
                <v-row align="center" justify="center">
                    <div>
                        <h2 class="display-1 mb-2" v-text="selectedProduct.title"></h2>
                        <v-divider class="mx-12 font-weight-black white"></v-divider>
                    </div>
                </v-row>
            </v-parallax>
        </div>

        <v-container class="pt-0" fluid>
            <v-row class="mx-1">
                <v-col class="px-0" md="1">
                    <div>
                        <v-card @click="selectImage(selectedProduct.image_front)" tile flat max-width="100" color="white">
                            <v-img :aspect-ratio="16/16" :src="selectedProduct.image_front"></v-img>
                        </v-card>

                        <v-card @click="selectImage(selectedProduct.image_back)" tile flat class="my-4" max-width="100" color="white">
                            <v-img :aspect-ratio="16/16" :src="selectedProduct.image_back"></v-img>
                        </v-card>

                        <v-card @click="selectImage(selectedProduct.image_side)" tile flat max-width="100" color="white">
                            <v-img :aspect-ratio="16/16" :src="selectedProduct.image_side"></v-img>
                        </v-card>
                    </div>
                </v-col>

                <v-col md="4">
                    <v-card tile color="white" flat>
                        <zoom :img-normal="imageSelected" :scale="2"></zoom>
                    </v-card>
                </v-col>

                <v-col md="7">
                    <v-card class="mb-3" color="transparent" flat>
                        <div class="d-flex">
                            <div class="pl-2">
                                <v-icon style="font-size: 70px" color="green">mdi-truck-fast</v-icon>
                            </div>
                            <div class="pl-3 pt-2">
                                <h4>This product qualifies for free shipping</h4>
                                <p class="subtitle-2 text--grey font-weight-regular">
                                    This block is set to appear automatically on products above a certain price, 
                                    which may qualify for free shipping or other perks.
                                </p>
                            </div>
                        </div>
                    </v-card>

                    <v-card class="mt-5" flat>
                        <v-tabs v-model="tab" grow background-color="success" centered dark icons-and-text>
                            <v-tabs-slider></v-tabs-slider>

                            <v-tab href="#tab-1"> Description <v-icon>mdi-information-outline</v-icon></v-tab>

                            <v-tab href="#tab-2"> Specification <v-icon>mdi-details</v-icon></v-tab>

                            <v-tab href="#tab-3"> Review <v-icon>mdi-star</v-icon></v-tab>
                        </v-tabs>

                        <v-tabs-items v-model="tab">
                            <v-tab-item value="tab-1">
                                <v-card flat>
                                    <v-card-text>{{ selectedProduct.description }}</v-card-text>
                                </v-card>
                            </v-tab-item>

                            <v-tab-item value="tab-2">
                                <v-card flat>
                                    <v-card-text>{{ selectedProduct.description }}</v-card-text>
                                </v-card>
                            </v-tab-item>

                            <v-tab-item value="tab-3">
                                <v-card flat>
                                    <div class="pa-3">Coming Soon!</div>
                                </v-card>
                            </v-tab-item>
                        </v-tabs-items>
                    </v-card>

                    <v-card class="mt-8" flat>
                        <div class="d-flex justify-between">
                            <v-card-text class="caption">
                                <div><span class="subtitle-2 font-weight-bold">Stock: </span> <span class="font-weight-bold" :class="selectedProduct.inventory > 0 ? 'green--text' : 'red--text'">{{ selectedProduct.inventory > 0 ? selectedProduct.inventory : 'Out Of Stock' }}</span></div>
                                <div><span class="subtitle-2 font-weight-bold">Brand: </span> <span class="blue--text">Tailor Sown</span></div>
                                <div>
                                    <span class="subtitle-2 font-weight-bold">Available Sizes:</span> 
                                    <span>
                                        <v-chip x-small class="ma-2" color="pink" label text-color="white">
                                            <v-icon x-small left>mdi-label</v-icon> Small
                                        </v-chip>
                                    </span>
                                    <span>
                                        <v-chip x-small class="mx-1" color="primary" label text-color="white">
                                            <v-icon x-small left>mdi-label</v-icon> Medium
                                        </v-chip>
                                    </span>
                                </div>
                            </v-card-text>

                            <v-card-text class="text-center mt-2 green--text font-weight-black display-2">
                                <v-icon color="success" x-large right>mdi-currency-ngn</v-icon>{{ selectedProduct.price * cartValue }}
                            </v-card-text>
                        </div>
                    </v-card>

                    <div class="mt-10 d-flex justify-space-between">
                        <div class="d-flex">
                            <v-btn tile @click="decreaseCartItem" color="blue darken-3" class="my-0 mt-4" dark x-small depressed>
                                <v-icon x-small>mdi-minus</v-icon>
                            </v-btn>

                            <v-text-field dense flat solo v-model="cartValue"></v-text-field>

                            <v-btn @click="increaseCartItem(selectedProduct)" tile color="blue darken-3 mt-0" class="my-0 mt-4" dark x-small depressed>
                                <v-icon x-small>mdi-plus</v-icon>
                            </v-btn>
                        </div>
                
                        <v-btn tile @click="addToCart(selectedProduct)" class="ml-6 mt-1" large depressed color="primary" dark>
                            <v-icon left>mdi-cart-arrow-down</v-icon> Add to Cart
                        </v-btn>

                        <v-btn tile class="ml-6 mt-1" large depressed color="success" dark>
                            <v-icon left>mdi-currency-ngn</v-icon> Buy Now
                        </v-btn>

                        <v-btn tile class="ml-6 mt-1" large depressed color="red" dark>
                            <v-icon left>mdi-email-outline</v-icon> Ask Question
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import productList from '../api/products.js'
import zoom from '../components/ZoomOnHover'
import cart from '../mixins/Carts.js'

export default {
    components: { zoom },

    mixins: [ cart ],

    data: () => ({
        selectedProduct: {},
        imageSelected: '',
        items: [
            {
                text: 'Dashboard',
                disabled: false,
                href: 'breadcrumbs_dashboard',
            },
            {
                text: 'Link 1',
                disabled: false,
                href: 'breadcrumbs_link_1',
            },
            {
                text: 'Link 2',
                disabled: true,
                href: 'breadcrumbs_link_2',
            },
        ],
        tab: null
    }),

    methods: {
        selectImage(image){
            this.imageSelected = image;
        }
    },

    created() {
        let products = productList.filter(product => product.id == this.$route.params.productId);
        products.forEach(product => this.selectedProduct = product)
        this.imageSelected = this.selectedProduct.image_front
    }
}
</script>