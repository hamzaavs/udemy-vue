const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value;
    },
  },
  // Lifecycle
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated(){
    console.log("updated()");
  },
  beforeUnmounted() {
    console.log("beforeUnmounted()");
  },
  unmounted() {
    console.log("unmounted()");
  }
});
app.mount('#app');

setTimeout(function () {
  app.unmounted();
},4000)
const app2 = Vue.createApp({
  template:` 
          <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: "pizzzzzzzzzzzaaaaaaaaa",
    }
  }
})
app2.mount("#app2");