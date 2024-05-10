app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true, 
        }
    },
    template: /*html*/
    `
        <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <!-- v-bind: Dynamically bind an attribute (src) to an expression (image) -->
                    <img 
                        v-bind:src="image" 
                        v-bind:alt="description" 
                        :title="description"
                        :class="[ !inStock ? 'out-of-stock-img' : '']"
                    >
                </div>

                <div class="product-info">
                    <h1>{{ title }}</h1>
                    <p>{{ description }}</p>

                    <!-- We can use v-show that is used for toggling elements' visibility -->
                    <p v-if="inStock">In Stock</p>
                    <p v-else>Out of Stock</p>

                    <p v-if="inventory > 10">More than 10 units</p>
                    <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
                    <p v-else>No more units</p>

                    <p>Shipping: {{ shipping }}</p>

                    <product-detail :details="details"></product-detail>

                    <!-- Attribute 'key' gives each DOM element a unique key -->
                    <!-- 
                        When style binding we provide an style object, because this
                        style object is javascript we camelCase name's properties,
                        we can also use kebap-case but between quotes i.e. 'background-color'
                    -->
                    <div v-for="(variant, index) in variants" 
                        :key="variant.id"
                        class="color-circle"
                        :style="{
                            backgroundColor: variant.color
                        }"
                        @mouseover="updateVariant(index)"
                    ></div>

                    <!-- Directive v-on gives a listener, in this case a listener for click event -->
                    <button 
                        class="button"
                        :class="{ disabledButton: !inStock }"
                        :disabled="!inStock"
                        v-on:click="addToCart"
                    >
                        Add to Cart
                    </button>

                    <button class="button" @click="removeFromCart">Remove</button>
                </div>
            </div>
        </div>
    `,
    data () {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            description: 'Vintage green socks',
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
                    quantity: 50,
                },
                {
                    id: 2235,
                    color: 'blue',
                    image: './assets/images/socks_blue.jpg',
                    quantity: 0,
                },
            ]
        }
    },
    methods: {
        addToCart () {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
        },
        removeFromCart () {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id);
        },
        updateVariant (index) {
            this.selectedVariant = index;
            console.log({ index });
        }
    },
    computed: {
        title () {
            return `${this.brand} ${this.product}`;
        },
        inStock () {
            return this.variants[this.selectedVariant].quantity;
        },
        image () {
            return this.variants[this.selectedVariant].image;
        },
        shipping () {
            if (this.premium) {
                return 'Free!';
            }

            return 2.99
        }
    }
});