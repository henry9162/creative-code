<template>
    <v-app>
        <v-system-bar app color="black"> 
            <Systembar />        
        </v-system-bar>

        <application-bar />

        <v-content>
            <HelloWorld/>  
        </v-content>
    </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Systembar from './components/Systembar';
import ApplicationBar from './components/ApplicationBar';

export default {
    name: 'App',

    components: {
        HelloWorld, Systembar, ApplicationBar
    },

    data: () => ({
       
    }),
};
</script>