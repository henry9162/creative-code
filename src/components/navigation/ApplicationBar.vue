<template>
    <div class="navigation-wrapper">
        <v-app-bar absolute height="80" app dark color="#313846">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>

            <v-toolbar-title class="display-1 text-uppercase">
                <v-hover v-slot:default="{ hover }">
                    <router-link to="/" tag="span" :class="hover ? 'hover-cursor':''" class="font-weight-bold text-uppercase">Ecommerce Logo</router-link>
                </v-hover>
            </v-toolbar-title>
            
            <v-spacer></v-spacer>

            <v-menu v-model="menu" close-delay="200" max-width="900" :close-on-content-click="false" nudge-bottom="20" nudge-left="320" open-on-hover :nudge-width="200" offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn text dark style="height: 57px" v-on="on" class="font-weight-bold title font-italic">All Categories</v-btn>
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

            <v-btn icon class="mx-4">
                <v-icon class="display-1">mdi-cart-remove</v-icon>
            </v-btn>

            <v-menu v-model="menu2" close-delay="200" max-width="200" :close-on-content-click="false" nudge-bottom="13" nudge-left="70" open-on-hover :nudge-width="200" offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn text dark style="height: 57px" v-on="on">
                        <v-avatar size="36">
                            <img class="mr-4" src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                        </v-avatar>
                        User <v-icon>mdi-chevron-down</v-icon>
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
                        </v-list-item-group>
                    </v-list>
                </v-card>
            </v-menu>
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
export default {
    data() {
        return {
            menu: false,
            menu2: false,
            drawer: null,
            categories: [ { title: 'MEN' }, { title: 'WOMEN'}, { title: 'KIDS'} ],
            categories2: [ { title: 'ACCESORIES' }, { title: 'BAGS'}, { title: 'MORE'} ],
            items: [
                { text: 'Real-Time', icon: 'mdi-clock', title: 'Home' },
                { text: 'Audience', icon: 'mdi-account', title: 'About' },
                { text: 'Conversions', icon: 'mdi-flag', title: 'Profile' },
            ],
            items2: [
                { action: 'local_activity', title: 'Attractions', items: [ { title: 'List Item' } ], },
                { action: 'school', title: 'Education', items: [ { title: 'List Item' } ] },
                { action: 'directions_run', title: 'Family', items: [ { title: 'List Item' } ] },
                { action: 'healing', title: 'Health', items: [ { title: 'List Item' } ] },
            ],
        }
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
</style>