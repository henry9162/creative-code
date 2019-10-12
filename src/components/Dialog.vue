<template>
    <v-dialog v-model="dialog" scrollable max-width="500px">
        <template v-slot:activator="{ dialog }">
            <v-btn @click="toggleDialog" fab>
                <v-icon large>mdi-magnify-plus-cursor</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-text style="height:50px">
                {{ product.name }}
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['product'],

    data: () => ({
        dialog: false
    }),

    methods: {
        toggleDialog(){
            this.dialog = !this.dialog;
        }
    }
}
</script>