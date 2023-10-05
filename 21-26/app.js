const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmInput: "",
    };
  },
  methods: {
    confrimedName() {
      this.confirmInput = this.name;
    },
    formSubmit() {
      alert("send message");
    },
    setName(event) {
      this.name = event.target.value;
    },
    add (num) {
      this.counter = this.counter + num;

    },
    remove () {
      this.counter = this.counter - 1;
    }
  }
});


app.mount('#events');
