const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish Goal",
      courseGoalB: "MasterGoal",  
      vueLink: "<a href:'https://google.com/'>click</a>",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.vueLink;
      }
    },
  },
});

app.mount("#user-goal");
