app.component('product-detail', {
    props: {
        details: {
            type: Array,
            default: () => []
        }
    },
    template: /*html*/
        `
        <ul>
            <li v-for="detail in details">
                {{ detail }}
            </li>
        </ul>
        `

});