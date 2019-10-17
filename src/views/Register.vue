<template>
    <div>
        <v-container>
            <v-row>
                <v-col class="d-flex justify-center">
                    <v-card width="50%" class="px-12 pb-10 pt-6 my-5">
                        <v-card-title class="d-flex justify-center mb-3 orange--text text--darken-2 font-weight-bold">REGISTER</v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col md="6">
                                    <v-text-field 
                                        v-model="form.first_name" prepend-inner-icon="mdi-account-arrow-right"
                                        :error-messages="firstNameErrors" clearable
                                        @input="$v.form.first_name.$touch()"
                                        @blur="$v.form.first_name.$touch()" 
                                        color="orange" label="First Name" required>
                                    </v-text-field>
                                </v-col>
                                <v-col md="6">
                                    <v-text-field
                                        v-model="form.last_name" prepend-inner-icon="mdi-account-arrow-right"
                                        :error-messages="lastNameErrors" clearable
                                        @input="$v.form.last_name.$touch()"
                                        @blur="$v.form.last_name.$touch()"
                                        color="orange" label="Last Name" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field 
                                        prepend-inner-icon="mdi-account-card-details"
                                        v-model="form.company_name" clearable
                                        :error-messages="companyNameErrors"
                                        @input="$v.form.company_name.$touch()"
                                        @blur="$v.form.company_name.$touch()"
                                        class="pt-0 orange--text" hint="Optional" color="orange"
                                        label="Brand Name">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field 
                                        v-model="form.email" prepend-inner-icon="mdi-email"
                                        class="pt-0" color="orange" type="email" label="Email" 
                                        :error-messages="emailErrors" clearable
                                        @input="$v.form.email.$touch()"
                                        @blur="$v.form.email.$touch()" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field
                                        v-model="form.phone" prepend-inner-icon="mdi-cellphone"
                                        :error-messages="phoneErrors" clearable
                                        @input="$v.form.phone.$touch()"
                                        @blur="$v.form.phone.$touch()" 
                                        class="pt-0" color="orange" type="phone" 
                                        label="Phone" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-select 
                                        class="pt-0" color="orange" v-model="form.sex"
                                        :error-messages="sexErrors" prepend-inner-icon="mdi-human-male-female"
                                        @input="$v.form.sex.$touch()" clearable
                                        @blur="$v.form.sex.$touch()"  
                                        :items="items" label="Sex" required>
                                    </v-select>
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
                            </v-row>
                        </v-card-text>

                        <v-card-actions class="d-flex justify-center">
                            <v-btn width="100%" @click="register" color="orange darken-1" dark large>
                                <v-progress-circular v-if="loader" :width="3" size="20" color="white" indeterminate></v-progress-circular> 
                               <span v-if="!loader">Create Account</span>
                            </v-btn>
                        </v-card-actions>

                        <v-card-text class="black--text pb-0 d-flex d-flex-col align-center justify-center">Already have an account?</v-card-text>
                        <div class="text-center"><v-btn @click="$router.push({ name: 'login' })" text class="orange--text text--darken-2 ma-0">Login</v-btn></div>

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
import validations from '../mixins/validations.js'
import axios from 'axios'

export default {
    components: { footerSection },

    mixins: [ validationMixin, validations ],

    data: ()  => ({
        form: {
            first_name: '',
            last_name: '',
            company_name: '',
            email: '',
            phone: '',
            sex: null,
            password: '',
        },
        items: [ 'Female', 'Male' ],
        show1: false,
        loading: false
    }),

    computed: {
        loader(){
            return this.$store.getters.loader;
        },
    },

    methods: {
        register(){
            if (!this.$v.$touch()) {
                this.$store.dispatch('register', this.form)
                    .then(response => {
                        this.$v.$reset();
                        this.form.first_name = '';
                        this.form.last_name = '';
                        this.form.company_name = '';
                        this.form.email = '';
                        this.form.phone = '';
                        this.form.sex = null;
                        this.form.password = '';

                        setTimeout(() => {
                            this.$router.push({name: 'home'});
                        }, 3000)
                    })
            }
        }
    }
}
</script>