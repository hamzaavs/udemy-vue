const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: "manuel",
                    name: "Manuel Lorenz",
                    phone: "01234 5678 991",
                    mail: "manuel@localhost.com",
                },

            ],
        };
    },

})

app.component('friend-contact', {
    template: `
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toogleBar">Show Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.mail }}</li>
          </ul>
        </li>   
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: "julie",
                name: "Julie Jones",
                phone: "09876 543 221",
                mail: "julie@localhost.com",
            },
        }
    },
    methods: {
        toogleBar() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    },
})

app.mount("#app");