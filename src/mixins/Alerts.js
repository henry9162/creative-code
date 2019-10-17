export default {
    computed: {
        snackBar: {
            get: function() { return this.$store.getters.snackBar },
            set: function() { this.$store.commit('hideAlert') }
        },

        alertMessage() { return this.$store.getters.alertMessage },
        color() { return this.$store.getters.alertColor }
    },

    methods: {
        deactivateSnackbar(){
            this.$store.dispatch('deactivateSnackbar')
        }
    },
}