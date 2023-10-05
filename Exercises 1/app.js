const app = Vue.createApp({
  data() {
    return {
      name: "Hamza",
      age: 14,
      url: "\images.jpg",
    };
  },
  methods: {
    randomNumber() {
      const rndNumber = Math.random();
      return rndNumber;
    },
  },
});

app.mount("#assignment");
