<template>
    <v-toolbar height="24" flat color="black">
        <v-toolbar-items>
        <v-btn @click="$router.push({ name: 'home' })" text class="grey--text subtitle-2 font-weight-black">HOME</v-btn>
        <v-btn text class="grey--text subtitle-2 font-weight-black">ABOUT</v-btn>
        <v-btn text class="grey--text subtitle-2 font-weight-black">CONTACT</v-btn>
        <v-menu transition="scale-transition" offset-y>
            <template v-slot:activator="{ on }">
                <v-btn text v-on="on" class="grey--text subtitle-2 font-weight-black">
                    FAQ <v-icon color="grey" class="headline-1 mt-1">mdi-chevron-down</v-icon>
                </v-btn>
            </template>

            <v-list >
                <v-list-item v-for="(link, index) in links" @click="" :key="index">
                    <v-list-item-icon class="mr-5">
                        <v-icon v-text="link.icon" right></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="ml-0 pl-0">{{ link.text }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        </v-toolbar-items>
                    
        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn v-if="!isAuth" @click="$router.push({ name: 'login' })" text class="grey--text subtitle-2 font-weight-black">LOGIN</v-btn>
            <v-btn v-if="!isAuth" @click="$router.push({ name: 'register' })" text class="grey--text subtitle-2 font-weight-black">REGISTER</v-btn>
            <v-btn text class="grey--text subtitle-2 font-weight-black">WISHLIST</v-btn>
        </v-toolbar-items>    
    </v-toolbar>
</template>

<script>
    export default {
        data: () => ({
            links: [
            { icon: 'mdi-domain', text: 'Create', route: '/' },
            { icon: 'mdi-email', text: 'Unlimited', route: '/' },
            { icon: 'mdi-message-text', text: 'Menus', route: '/' },
            ]
        }),

        computed: {
            isAuth() {
                return this.$store.getters.isAuthenticated
            }
        }
    }
</script>