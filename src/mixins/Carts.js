export default {
    data: () => ({
        cartValue: 1,
        imageSelected: ''
    }),

    methods: {
        increaseCartItem(product){
            this.cartValue < product.inventory ? this.cartValue++ : '' ;
        },
        decreaseCartItem(){
            this.cartValue != 1 ? this.cartValue-- : this.cartValue = 1 ;
        },
        productDetails(event) {
            this.product = event.params.product;
        },
        addToCart(product){
            this.$emit('cartAdded', product);
        },
        selectImage(image){
            this.imageSelected = image;
        }
    }
}