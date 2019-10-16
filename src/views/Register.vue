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
                                        v-model="firstName"
                                        :error-messages="firstNameErrors" 
                                        @input="$v.firstName.$touch()"
                                        @blur="$v.firstName.$touch()" 
                                        color="orange" label="First Name" required>
                                    </v-text-field>
                                </v-col>
                                <v-col md="6">
                                    <v-text-field
                                        v-model="lastName"
                                        :error-messages="lastNameErrors" 
                                        @input="$v.lastName.$touch()"
                                        @blur="$v.lastName.$touch()"
                                        color="orange" label="Last Name" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field 
                                        v-model="brandName"
                                        :error-messages="brandNameErrors" 
                                        @input="$v.brandName.$touch()"
                                        @blur="$v.brandName.$touch()"
                                        class="pt-0" hint="Optional" color="orange"
                                        label="Brand Name">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field 
                                        v-model="email"
                                        class="pt-0" color="orange" type="email" label="Email" 
                                        :error-messages="emailErrors" 
                                        @input="$v.email.$touch()"
                                        @blur="$v.email.$touch()" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field
                                        v-model="phone"
                                        :error-messages="phoneErrors" 
                                        @input="$v.phone.$touch()"
                                        @blur="$v.phone.$touch()" 
                                        class="pt-0" color="orange" type="phone" 
                                        label="Phone" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-select 
                                        class="pt-0" color="orange" v-model="select"
                                        :error-messages="selectErrors" 
                                        @input="$v.select.$touch()"
                                        @blur="$v.select.$touch()"  
                                        :items="items" label="Sex" required>
                                    </v-select>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field 
                                        class="pt-0" v-model="password" hint="At least 8 characters" counter
                                        :error-messages="passwordErrors" 
                                        @input="$v.password.$touch()"
                                        @blur="$v.password.$touch()" 
                                        :append-icon="show1 ? 'visibility' : 'visibility_off'" 
                                        :type="show1 ? 'text' : 'password'"
                                        color="orange" label="Password" required
                                        @click:append="show1 = !show1">
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-actions class="d-flex justify-center">
                            <v-btn width="100%" color="orange darken-1" dark large>Create Account</v-btn>
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
import { required, maxLength, minLength, email, numeric } from 'vuelidate/lib/validators'

export default {
    components: { footerSection },

    mixins: [ validationMixin ],

    validations: {
        firstName: { required, maxLength: maxLength(10) },
        lastName: { required, maxLength: maxLength(10) },
        brandName: { maxLength: maxLength(10) },
        phone: { required, maxLength: maxLength(11), minLength: maxLength(11), numeric },
        email: { required, email },
        select: { required },
        password: { required, minLength: minLength(6) },
    },

    computed: {
        firstNameErrors () {
        const errors = []
        if (!this.$v.firstName.$dirty) return errors
        !this.$v.firstName.required && errors.push('First Name is required!')
        !this.$v.firstName.maxLength && errors.push('First name must be at most 10 characters long')
        return errors
      },
      lastNameErrors () {
        const errors = []
        if (!this.$v.lastName.$dirty) return errors
        !this.$v.lastName.maxLength && errors.push('last name must be at most 10 characters long')
        !this.$v.lastName.required && errors.push('last name is required.')
        return errors
      },
      brandNameErrors () {
        const errors = []
        !this.$v.brandName.maxLength && errors.push('Brand name must be at most 10 characters long')
        return errors
      },
      phoneErrors () {
        const errors = []
        if (!this.$v.phone.$dirty) return errors
        !this.$v.phone.maxLength && errors.push('phone must be  11 characters long')
        !this.$v.phone.minLength && errors.push('phone must be  11 characters long')
        !this.$v.phone.numeric && errors.push('phone must be  numeric')
        !this.$v.phone.required && errors.push('phone  is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.minLength && errors.push('password must be at least 6 characters long')
        !this.$v.password.required && errors.push('password is required')
        return errors
      },
    },

    data: ()  => ({
        firstName: '',
        lastName: '',
        brandName: '',
        email: '',
        phone: '',
        select: null,
        items: [ 'Female', 'Male' ],
        password: 'Password',
        show1: false,
    })
}
</script>