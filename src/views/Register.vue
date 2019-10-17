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
                                        v-model="form.firstName"
                                        :error-messages="firstNameErrors" 
                                        @input="$v.form.firstName.$touch()"
                                        @blur="$v.form.firstName.$touch()" 
                                        color="orange" label="First Name" required>
                                    </v-text-field>
                                </v-col>
                                <v-col md="6">
                                    <v-text-field
                                        v-model="form.lastName"
                                        :error-messages="lastNameErrors" 
                                        @input="$v.form.lastName.$touch()"
                                        @blur="$v.form.lastName.$touch()"
                                        color="orange" label="Last Name" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field 
                                        v-model="form.brandName"
                                        :error-messages="brandNameErrors" 
                                        @input="$v.form.brandName.$touch()"
                                        @blur="$v.form.brandName.$touch()"
                                        class="pt-0" hint="Optional" color="orange"
                                        label="Brand Name">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field 
                                        v-model="form.email"
                                        class="pt-0" color="orange" type="email" label="Email" 
                                        :error-messages="emailErrors" 
                                        @input="$v.form.email.$touch()"
                                        @blur="$v.form.email.$touch()" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field
                                        v-model="form.phone"
                                        :error-messages="phoneErrors" 
                                        @input="$v.form.phone.$touch()"
                                        @blur="$v.form.phone.$touch()" 
                                        class="pt-0" color="orange" type="phone" 
                                        label="Phone" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-select 
                                        class="pt-0" color="orange" v-model="form.sex"
                                        :error-messages="sexErrors" 
                                        @input="$v.form.sex.$touch()"
                                        @blur="$v.form.sex.$touch()"  
                                        :items="items" label="Sex" required>
                                    </v-select>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field 
                                        class="pt-0" v-model="form.password" hint="At least 8 characters" counter
                                        :error-messages="passwordErrors" 
                                        @input="$v.form.password.$touch()"
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
                            <v-btn width="100%" @click="register" color="orange darken-1" dark large>Create Account</v-btn>
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
            firstName: '',
            lastName: '',
            brandName: '',
            email: '',
            phone: '',
            sex: null,
            password: '',
        },
        items: [ 'Female', 'Male' ],
        show1: false,
    }),

    methods: {
        register(){
            if (!this.$v.$touch()) {
                this.$store.dispatch('register', this.form);
            }
        }
    }
}
</script>