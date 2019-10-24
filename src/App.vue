<template>
    <v-app>
        <v-system-bar absolute app color="black"> 
            <Systembar />        
        </v-system-bar>

        <div class="wrapper">

            <!-- SnackBar -->
            <v-snackbar :color="color" :timeout=3000 top right v-model="snackBar">
                <span v-text="alertMessage"></span>
                <v-btn color="white" text @click="deactivateSnackbar">
                    <v-icon>mdi-close-outline</v-icon>
                </v-btn>
            </v-snackbar>

            <application-bar />

            <v-content>
                <transition enter-active-class="animated pulse" leave-active-class="animated fadeOut" mode="out-in">
                    <router-view></router-view> 
                </transition> 
            </v-content>

            <!-- Newsletter and Footer -->
            <newsletter-footer />
        </div>
    </v-app>
</template>

<script>
import Systembar from './components/navigation/Systembar';
import ApplicationBar from './components/navigation/ApplicationBar';
import alerts from './mixins/Alerts.js'
import newsletterFooter from './components/Footer'

export default {
    name: 'App',

    mixins: [alerts],

    components: {
        Systembar, ApplicationBar, newsletterFooter
    },

    data: () => ({
       
    }),

    created() {
        this.$store.dispatch('getAllProducts');
        this.deactivateSnackbar();
        this.$store.dispatch('persistCart');
    }
};
</script>

<style lang="scss">
    .wrapper {
        position: relative;
    }
</style>