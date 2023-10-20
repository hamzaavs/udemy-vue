import { createApp } from 'vue';
import App from "./App.vue"
import friendConctact from "@/components/FriendConctact.vue";

const app = createApp(App)
app.component('friend-contact', friendConctact)
app.mount('#app');
