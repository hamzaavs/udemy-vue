const app = Vue.createApp({
  data() {
    return {
      entredGoalValue: "",
      goals: []
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.entredGoalValue);
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    }
  }
});

app.mount('#user-goals');
