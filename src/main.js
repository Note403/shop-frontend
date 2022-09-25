import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import TopBar from "@/components/TopBar.vue";
import Login from "@/components/Login.vue";
import Alert from "@/components/Alert.vue";

const app = createApp(App)

app.component('TopBar', TopBar)
app.component('Login', Login)
app.component('Alert', Alert)

app.use(router)

app.mount('#app')
