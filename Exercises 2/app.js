const app = Vue.createApp({
    data() {
       return{
           text : '',
           enterText : '',
       }
    },
    methods: {
      alertButton() {
        alert("hellooo")
      },
      inputText(event) {
        this.text = event.target.value;
      },
      inputEnterText() {
        this.enterText = this.name;
      }
    }
})

app.mount("#assignment")