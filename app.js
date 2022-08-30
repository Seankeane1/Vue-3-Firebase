const app = Vue.createApp({
    //data, functions
    //template: '<h2>I am the template</h2>'
    data(){
        return{
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks; // sets it to whatever it currently isn't
        },
        handleEvent(e, data){
            console.log(e)
            if (data){
                console.log(data);
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app') // injects this element into the id 'app'