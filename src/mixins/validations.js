import { required, maxLength, email, minLength, numeric } from 'vuelidate/lib/validators'


export default {
    validations: {
        form: {
            first_name: { required, maxLength: maxLength(10) },
            last_name: { required, maxLength: maxLength(10) },
            company_name: { maxLength: maxLength(20) },
            phone: { required, maxLength: maxLength(11), minLength: maxLength(11), numeric },
            email: { required, email },
            sex: { required },
            password: { required, minLength: minLength(6) },
        }
    },

    computed: {
        firstNameErrors () {
        const errors = []
        if (!this.$v.form.first_name.$dirty) return errors
        !this.$v.form.first_name.required && errors.push('First Name is required!')
        !this.$v.form.first_name.maxLength && errors.push('First name must be at most 10 characters long')
        return errors
      },
      lastNameErrors () {
        const errors = []
        if (!this.$v.form.last_name.$dirty) return errors
        !this.$v.form.last_name.maxLength && errors.push('last name must be at most 10 characters long')
        !this.$v.form.last_name.required && errors.push('last name is required.')
        return errors
      },
      companyNameErrors () {
        const errors = []
        !this.$v.form.company_name.maxLength && errors.push('Brand name must be at most 10 characters long')
        return errors
      },
      phoneErrors () {
        const errors = []
        if (!this.$v.form.phone.$dirty) return errors
        !this.$v.form.phone.maxLength && errors.push('phone must be  11 characters long')
        !this.$v.form.phone.minLength && errors.push('phone must be  11 characters long')
        !this.$v.form.phone.numeric && errors.push('phone must be  numeric')
        !this.$v.form.phone.required && errors.push('phone  is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.form.email.$dirty) return errors
        !this.$v.form.email.email && errors.push('Must be valid e-mail')
        !this.$v.form.email.required && errors.push('E-mail is required')
        return errors
      },
      sexErrors () {
        const errors = []
        if (!this.$v.form.sex.$dirty) return errors
        !this.$v.form.sex.required && errors.push('Item is required')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.form.password.$dirty) return errors
        !this.$v.form.password.minLength && errors.push('password must be at least 6 characters long')
        !this.$v.form.password.required && errors.push('password is required')
        return errors
      },
      
    },

}