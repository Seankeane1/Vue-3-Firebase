const app = Vue.createApp({
    //data, functions
    //template: '<h2>I am the template</h2>'
    data(){
        return{
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss', isFav: false},
                {title: 'the way of kings', author: 'brandon sanderson', isFav: false},
                {title: 'the final empire', author: 'brandon sanderson', isFav: true}
            ]
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks; // sets it to whatever it currently isn't
        },
        toggleFav(book){
            book.isFav = !book.isFav
        }
    },
        computed: { //depends on other data
            filteredBooks(){
                return this.books.filter((book) => book.isFav)
            }
        } 
})

app.mount('#app') // injects this element into the id 'app'