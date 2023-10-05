const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        }
    },
    computed: {
        checker() {
            if (this.counter < 37) {
                return "Not there yet";
            }
            else return "Too much!";
        }
    },
    watch: {
      counter(value)  {
          const that = this;
          if (value > 37) {
              setTimeout(function () {
                  that.counter = 0;
              }, 5000);
          }
      }
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        },
    }
});

app.mount("#assignment");