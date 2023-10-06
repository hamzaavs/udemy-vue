Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValues: ''
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValues);
      this.enteredValues = '';
    },
  },
}).mount("#app");
