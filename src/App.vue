<template>
    <v-app>
        <v-system-bar app color="black"> 
            <Systembar />        
        </v-system-bar>

        <v-app-bar app dark>
            <v-app-bar-nav-icon class="grey--text"></v-app-bar-nav-icon>

            <v-toolbar-title class="headline text-uppercase">
                <span class="font-weight-bold text-uppercase">Ecommerce Logo</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-menu v-model="menu" max-width="900" :close-on-content-click="false" nudge-bottom="13" nudge-left="320" open-on-hover :nudge-width="200" offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn text dark style="height: 57px" v-on="on" class="font-weight-bold subtitle-1">All Categories</v-btn>
                </template>

                <v-card>
                    <v-container class="ma-0 pa-0">
                        <v-row class="ma-0">
                            <v-col class="pa-0" md="4">
                                <div style="background: grey">
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
                                            <v-list dense flat>
                                                <v-subheader :inset="true" class="subtitle-2 font-weight-black" v-text="item.title"></v-subheader>
                                                <v-divider class="mx-4"></v-divider>
                                                <v-list-item-group v-model="listGroup" color="primary">
                                                    <v-list-item v-for="(item, i) in items" :key="i">
                                                        <v-list-item-icon class="ml-3 mr-2">
                                                            <v-icon right v-text="item.icon"></v-icon>
                                                        </v-list-item-icon>
                                                        <v-list-item-content>
                                                          <v-list-item-title v-text="item.text"></v-list-item-title>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                </v-list-item-group>
                                            </v-list>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col v-for="(item, i) in categories2" :key="i" class="pt-0">
                                            <v-list class="mt-0 pt-0" dense flat>
                                                <v-subheader :inset="true" class="subtitle-2 font-weight-black" v-text="item.title"></v-subheader>
                                                <v-divider></v-divider>
                                                <v-list-item-group v-model="listGroup" color="primary">
                                                    <v-list-item v-for="(item, i) in items" :key="i">
                                                        <v-list-item-icon class="ml-3 mr-2">
                                                            <v-icon right v-text="item.icon"></v-icon>
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

            <v-btn text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
                <span class="mr-2">Latest Release</span>
            </v-btn>
        </v-app-bar>

        <v-content>
            <HelloWorld/>  
        </v-content>
    </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Systembar from './components/Systembar';

export default {
    name: 'App',

    components: {
        HelloWorld, Systembar
    },

    data: () => ({
        menu: false,
        listGroup: 1,
        categories: [ { title: 'MEN' }, { title: 'WOMEN'}, { title: 'KIDS'} ],
        categories2: [ { title: 'ACCESORIES' }, { title: 'BAGS'}, { title: 'MORE'} ],
        items: [
          { text: 'Real-Time', icon: 'mdi-clock' },
          { text: 'Audience', icon: 'mdi-account' },
          { text: 'Conversions', icon: 'mdi-flag' },
        ],
    }),
};
</script>
