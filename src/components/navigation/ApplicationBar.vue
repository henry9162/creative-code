<template>
    <div class="">
        <v-app-bar absolute height="65" app dark color="#313846">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>

            <v-toolbar-title class="text-uppercase">
                <v-hover v-slot:default="{ hover }">
                    <router-link to="/" tag="span" :class="hover ? 'hover-cursor':''" class="font-weight-bold text-uppercase">Ecommerce Logo</router-link>
                </v-hover>
            </v-toolbar-title>
            
            <v-spacer></v-spacer>

            <v-menu v-model="menu" close-delay="200" max-width="900" :close-on-content-click="false" nudge-bottom="20" nudge-left="320" open-on-hover :nudge-width="200" offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn text dark style="height: 57px" v-on="on" class="font-weight-bold subtitle-2">All Categories</v-btn>
                </template>

                <v-card>
                    <v-container class="ma-0 pa-0">
                        <v-row class="ma-0">
                            <v-col class="pa-0" md="4">
                                <div class="category-menu-background">
                                    <v-card-text class="text-center px-12 pt-12 pb-8">
                                        <div class="display-2 mt-6 white--text font-weight-black">Custom</div>
                                        <div class="display-1 white--text font-weight-black mb-4">Menus</div>
                                        <div class="white--text subtitle-1">
                                            Full width or custom width mega menu dropdown  with  page builder support
                                        </div>
                                    </v-card-text>
                                    <div class="text-center pb-4">
                                        <v-btn pa-4 large color="light-blue lighten-1" class="mb-12 white--text text-center">
                                            SHOP NOW <v-icon right>mdi-arrow-right</v-icon>
                                        </v-btn>
                                    </div>
                                </div>
                            </v-col>

                            <v-col md="8" color="grey darken-4">
                                <v-container class="pt-0 mr-0 ml-0">
                                    <v-row>
                                        <v-col v-for="(item, i) in categories" :key="i" class="pa-0">
                                            <v-list dense>
                                                <v-subheader :inset="true" class="subtitle-2 font-weight-black" v-text="item.title"></v-subheader>
                                                <v-divider class="mx-4"></v-divider>
                                                <v-list-item-group color="pink">  
                                                    <v-list-item v-for="(item, i) in items" :key="i">
                                                        <v-list-item-icon class="ml-4 mr-1">
                                                            <v-icon class="headline-1">mdi-chevron-right</v-icon>                              
                                                        </v-list-item-icon>
                                                        <v-list-item-content >
                                                            <v-list-item-title v-text="item.text"></v-list-item-title>
                                                        </v-list-item-content>
                                                    </v-list-item>         
                                                </v-list-item-group>
                                            </v-list>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col v-for="(item, i) in categories2" :key="i" class="pt-0">
                                            <v-list class="mt-0 pt-0" dense>
                                                <v-subheader :inset="true" class="subtitle-2 font-weight-black" v-text="item.title"></v-subheader>
                                                <v-divider></v-divider>
                                                <v-list-item-group color="primary">
                                                    <v-list-item v-for="(item, i) in items" :key="i">
                                                        <v-list-item-icon class="ml-3 mr-1">
                                                            <v-icon class="headline-1">mdi-chevron-right</v-icon> 
                                                        </v-list-item-icon>
                                                        <v-list-item-content>
                                                          <v-list-item-title v-text="item.text"></v-list-item-title>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                </v-list-item-group>
                                            </v-list>
                                        </v-col>

                                    </v-row>
                                </v-container>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-menu>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon class="display-1">mdi-magnify</v-icon>
            </v-btn>

            <v-menu tile v-model="menu2" close-delay="200" max-width="380" :close-on-content-click="false" nudge-bottom="16" nudge-left="55" open-on-hover :nudge-width="400" offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn icon class="mx-4" v-on="on">
                        <v-badge class="title" overlap color="red">
                            <template v-if="cartItem" class="cart-notification" v-slot:badge>
                                <span dark v-text="cartItem"></span>
                            </template>
                            <v-icon class="display-1">mdi-cart-outline</v-icon>
                        </v-badge>
                    </v-btn>
                </template>

                <div v-if="cartItem" class="menu-container">
                    <div class="arrow-up"></div>
                    <v-card tile class="mx-auto">
                        <v-list class="pb-0">
                            <v-list-item-group>
                                <template v-for="(product, index) in cartProducts">
                                    <v-list-item :key="product.title">
                                        
                                            <v-list-item-avatar class="mr-4" style="border-radius: 0px">
                                                <v-img :aspect-ratio="16/9" :src="product.image_front"></v-img>
                                            </v-list-item-avatar>
                                    
                                            <v-list-item-content>
                                                <v-list-item-title class="subtitle-2 font-weight-regular blue--text text--darken-2" v-text="product.title"></v-list-item-title>
                                                <v-list-item-subtitle class="caption pa-0 ma-0 grey--text text--darken-2 font-weight-regular">
                                                    Quantity - x {{ product.quantity }}
                                                </v-list-item-subtitle>
                                                <!-- <v-list-item-subtitle class="caption pa-0 ma-0">Size - </v-list-item-subtitle> -->
                                            </v-list-item-content>
                                            <v-spacer></v-spacer>

                                            <v-list-item-action> 
                                                <v-list-item-title class="subtitle-2 green--text ml-4 font-weight-thin">
                                                    <v-icon color="success" class="font-weight-thin" x-small right>mdi-currency-ngn</v-icon>{{ product.price }}
                                                </v-list-item-title>
                                            </v-list-item-action>

                                            <v-list-item-action>
                                                <v-icon @click="removeCartItem(product.id)" color="red">mdi-close</v-icon>
                                            </v-list-item-action>
                                        
                                    </v-list-item>

                                    <v-divider v-if="index <= cartProducts.length" :key="index"></v-divider>
                                </template>
                            </v-list-item-group>
                        </v-list>

                        <v-divider></v-divider>

                        <v-list-item class="blue lighten-5">
                            <template>
                                <v-list-item-content></v-list-item-content>
                                <v-list-item-action>
                                    <v-list-item-title class="grey--text font-weight-bold">Total</v-list-item-title>
                                </v-list-item-action>
                                <v-list-item-action>
                                    <v-list-item-title class="green--text">
                                        <v-icon color="success" class="font-weight-thin" small right>mdi-currency-ngn</v-icon>{{ cartTotal }}
                                    </v-list-item-title>
                                </v-list-item-action>
                            </template>
                        </v-list-item>

                        <v-divider></v-divider>
                        <v-list-item class="blue lighten-3">
                            <div class="d-flex justify-center py-4">
                                <v-btn @click="$router.push({ name: 'cart' })" depressed tile dark class="mr-1">
                                    <v-icon small>mdi-cart</v-icon> Show Cart
                                </v-btn>
                                <v-btn @click="$router.push({ name: 'checkout' })" depressed tile dark color="success" class="ml-1">
                                    Check Out <v-icon small right>mdi-arrow-right</v-icon>
                                </v-btn>
                            </div>
                        </v-list-item>
                    </v-card>
                </div>

                <div v-else class="pa-4 white red--text font-weight-bold">You have no item in cart</div>
            </v-menu>

            <div v-if="isAuth">
                <v-menu v-model="userMenu" close-delay="200" max-width="200" :close-on-content-click="false" nudge-bottom="13" nudge-left="55" open-on-hover :nudge-width="200" offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn text dark style="height: 57px" v-on="on">
                            <v-avatar size="36">
                                <img class="mr-4" src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                            </v-avatar>
                            <span v-text="user.first_name"></span> <v-icon>mdi-chevron-down</v-icon>
                        </v-btn>
                    </template>

                    <v-card>
                        <v-list nav dense>
                            <v-list-item-group color="primary">
                                <v-list-item v-for="(item, i) in items" :key="i">
                                    <v-list-item-icon class="mr-4">
                                        <v-icon v-text="item.icon"></v-icon>
                                    </v-list-item-icon>

                                    <v-list-item-content>
                                        <v-list-item-title v-text="item.text"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-divider></v-divider>

                                <v-list-item @click="logout">
                                    <v-list-item-icon class="mr-4">
                                        <v-icon>mdi-logout</v-icon>
                                    </v-list-item-icon>

                                    <v-list-item-content>
                                        <v-list-item-title>Logout</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-card>
                </v-menu>
            </div>   
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>John Leider</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list>
                <v-list-group v-for="item in items2" :key="item.title" v-model="item.active" :prepend-icon="item.action" no-action>
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item v-for="subItem in item.items" :key="subItem.title" @click="">
                        <v-list-item-content>
                            <v-list-item-title v-text="subItem.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            menu: false,
            userMenu: false,
            menu2: false,
            drawer: null,
            categories: [ { title: 'MEN' }, { title: 'WOMEN'}, { title: 'KIDS'} ],
            categories2: [ { title: 'ACCESORIES' }, { title: 'BAGS'}, { title: 'MORE'} ],
            items: [
                { text: 'Profile', icon: 'mdi-account'},
                { text: 'Dashboard', icon: 'mdi-view-dashboard-outline' },
            ],
            items2: [
                { action: 'local_activity', title: 'Attractions', items: [ { title: 'List Item' } ], },
                { action: 'school', title: 'Education', items: [ { title: 'List Item' } ] },
                { action: 'directions_run', title: 'Family', items: [ { title: 'List Item' } ] },
                { action: 'healing', title: 'Health', items: [ { title: 'List Item' } ] },
            ]
        }
    },

    computed: {
        ...mapGetters({
            isAuth: 'isAuthenticated',
            user: 'loggedUser',
            cartItem: 'numberOfCartItems',
            cartProducts: 'cartProducts',
            cartTotal: 'cartTotal'
        })
    },

    methods: {
        ...mapActions({
            logout: 'logout',
            removeCartItem: 'removeCartItem'
        })
    }
}
</script>

<style lang="scss">
    .navigation-wrapper {
        position: absolute;
        top: 0;
        width: 100%;
    }
    .hover-cursor {
        cursor: pointer;
    }
    .category-menu-background {
        background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://tinuiti.com/wp-content/uploads/legacysitecontent/cpcs/posts_01/2018/01/23173041/photo-1511511450040-677116ff389e-1024x680.jpg');
        background-position: center;
        background-size: cover;
    }
    .cart-notification {
        top: -15px;
        right: -12px
    }
</style>