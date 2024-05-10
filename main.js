const app = Vue.createApp({
    data () {
        return {
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            description: 'Vintage green socks',
            inStock: true,
            inventory: 15,
            details: [
                '50% cotton',
                '30% wool',
                '20% polyester',
            ],
            variants: [
                {
                    id: 2234,
                    color: 'green',
                    image: './assets/images/socks_green.jpg',
                },
                {
                    id: 2235,
                    color: 'blue',
                    image: './assets/images/socks_blue.jpg',
                },
            ]
        }
    },
    methods: {
        addToCart () {
            if (this.cart === this.inventory) return;
            this.cart += 1;
        },
        remove1FromCart () {
            if (this.cart === 0) return;
            this.cart -= 1;
        },
        updateImage (variantImage) {
            this.image = variantImage;
        }
    }
});
