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
import Systembar from './components/navigation/Systembar';
import ApplicationBar from './components/navigation/ApplicationBar';

export default {
    name: 'App',

    components: {
        Systembar, ApplicationBar
    },

    data: () => ({
       
    }),
};
</script>