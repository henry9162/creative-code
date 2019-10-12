<template>
    <v-app>
        <v-system-bar absolute app color="black"> 
            <Systembar />        
        </v-system-bar>

        <application-bar />

        <v-content>
            <router-view></router-view>  
        </v-content>
    </v-app>
</template>

<script>
import Systembar from './components/Systembar';
import ApplicationBar from './components/ApplicationBar';

export default {
    name: 'App',

    components: {
        Systembar, ApplicationBar
    },

    data: () => ({
       
    }),
};
</script>