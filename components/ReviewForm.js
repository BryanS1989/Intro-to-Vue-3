app.component('review-form', {
    template: /*html*/ `
    <!-- '.prevent' is a modifier that prevents, in this case, browser refresh -->
    <form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>

        <!-- v-model creates a two way databing -->
        <label for="name">Name:</label>
        <input id="name" v-model="name">

        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>

        <!-- '.number' is a modifier that typecast the value as a number -->
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <input type="submit" value="Submit" class="button">
    </form>
    `,
    data () {
        return {
            name: '',
            review: '',
            rating: null
        }
    },
    methods: {
        onSubmit () {
            if ( this.name === '' || this.review === '' || !this.rating ) {
                alert('Review is incomplete. Please fill out every field'); 
                return;
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
            };

            this.$emit('review-submitted', productReview);

            this.name = '';
            this.review = '';
            this.rating = null;
        }
    }
});