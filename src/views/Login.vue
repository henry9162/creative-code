<template>
    <div class="login-background">
        <v-container>
            <v-row>
                <v-col class="d-flex justify-center">
                    <v-card elevation="24" width="45%" class="px-12 pb-10 pt-6 my-5">
                        <v-card-title class="d-flex justify-center mb-3 orange--text text--darken-2 font-weight-bold">LOGIN</v-card-title>
                        <v-card-text class="pb-0">
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field 
                                        v-model="form.email" prepend-inner-icon="mdi-email"
                                        class="pt-0" color="orange" type="email" label="Email" 
                                        :error-messages="emailErrors" clearable
                                        @input="$v.form.email.$touch()"
                                        @blur="$v.form.email.$touch()" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field 
                                        class="pt-0" v-model="form.password" hint="At least 8 characters" counter
                                        :error-messages="passwordErrors" prepend-inner-icon="mdi-lock-question"
                                        @input="$v.form.password.$touch()" clearable
                                        @blur="$v.form.password.$touch()" 
                                        :append-icon="show1 ? 'visibility' : 'visibility_off'" 
                                        :type="show1 ? 'text' : 'password'"
                                        color="orange" label="Password" required
                                        @click:append="show1 = !show1">
                                    </v-text-field>
                                </v-col>
                                <!-- <v-col class="pt-0" cols="6">
                                    <v-checkbox
                                        v-model="checkbox" class="pt-0"
                                        :error-messages="checkboxErrors"
                                        label="Remember Me"
                                        required
                                        @change="$v.checkbox.$touch()"
                                        @blur="$v.checkbox.$touch()">
                                    </v-checkbox>
                                </v-col>
                                <v-col class="text-right" cols="6">
                                    <v-btn class="py-0" dark text color="orange">Forgot Password</v-btn>
                                </v-col> -->
                            </v-row>
                        </v-card-text>
                        <v-card-actions class="d-flex pt-1 justify-center">
                            <v-btn @click="login" width="100%" color="orange darken-1" dark large>
                               <v-progress-circular v-if="loader" :width="3" size="20" color="white" indeterminate></v-progress-circular>
                                <span v-if="!loader">Login</span>
                            </v-btn>
                        </v-card-actions>

                        <v-card-text class="black--text pb-0 d-flex d-flex-col align-center justify-center">Don't have an account yet?</v-card-text>
                        <div class="text-center"><v-btn @click="$router.push({ name: 'register' })" text class="orange--text text--darken-2 ma-0">Register</v-btn></div>

                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <footer-section />
    </div>
</template>

<script>
import footerSection from '../components/Footer'
import { validationMixin } from 'vuelidate'
import { required, minLength, email} from 'vuelidate/lib/validators'
import validations from '../mixins/validations.js'

export default {
    components: { footerSection },

    mixins: [ validationMixin, validations ],

    data: () => ({
        form: {
            email: '',
            password: ''
        },
        show1: false
    }),

    methods: {
        login(){
            if(!this.$v.$touch()){
                this.$store.dispatch('login', { username: this.form.email, password: this.form.password })
                    .then(response => {
                        this.$v.$reset();
                        this.form.email = '';
                        this.form.password = '';

                        setTimeout(() => {
                            this.$router.push({name: 'home'})
                        }, 3000);
                    })
            }
        }
    },

    computed: {
        loader(){
            return this.$store.getters.loader;
        }
    }

}
</script>

<style lang="scss">
    .login-background {
        background: url('https://thumbs.dreamstime.com/z/tropical-background-palm-trees-branches-starfish-seashell-pink-travel-copy-space-139854756.jpg');
        background-repeat: no-repeat;
        background-size: contain
    }
</style>