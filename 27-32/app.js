const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: '',
      lastname: '',
    };
  },

  computed: {
    fullname() {
        if(this.name === " " || this.lastname === ' ' ) {
            return "";
        }
        else return this.name + " " + this.lastname;
    }
  },
  watch: {
      counter(value){
          const that = this;
          if (value > 50) {
              setTimeout(function () {
                  that.counter = 0;
              }, 2000);
          }
          // name(value) {
          //     if(this.fullname === " " ) {
          //         this.fullname = '';
          //     }
          //     else this.fullname = value + ' ' + this.lastname;
          // },
          // lastname(value) {
          //     if(this.fullname === " " ) {
          //         this.fullname = '';
          //     }
          //     else this.fullname = this.name + '    ' + value;
          // },
      }
  },
  methods: {
    outputFullName() {

    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    resetInput() {
      this.name = '';
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
