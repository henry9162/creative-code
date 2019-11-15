import { mapGetters, mapActions } from "vuex";

export default {
    data: () => ({
        imageSelected: ''
    }),

    computed: {
        ...mapGetters({
            quantity: 'quantity'
        })
    },

    methods: {
        ...mapActions({
            updateQuantity: 'updateQuantity',
            addToCart: 'addToCart'
        }),
        selectImage(image){
            this.imageSelected = image;
        },
        productDetails(event) {
            this.product = event.params.product;
            this.imageSelected = event.params.product.image_front
        },
    }
}