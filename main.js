const app = Vue.createApp({
    data () {
        return {
            cart: [],
            premium: true,
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        },
        removeProductFromCart(id) {
            const productIndex = this.cart.indexOf(id);
            this.cart.splice(productIndex, 1);
        }
    },
});
