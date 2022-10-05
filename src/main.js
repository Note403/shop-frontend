import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import {Store} from "@/Store";

import './assets/main.css'
import TopBar from "@/components/TopBar.vue";
import Login from "@/components/Login.vue";
import Alert from "@/components/Alert.vue";
import Slideshow from "@/components/Slideshow.vue";
import ShopSearch from "@/components/ShopSearch.vue";
import ArticleDisplay from "@/components/ArticleDisplay.vue";
import Article from "@/components/Article.vue";

const app = createApp(App)

app.component('TopBar', TopBar)
app.component('Login', Login)
app.component('Alert', Alert)
app.component('Slideshow', Slideshow)
app.component('ShopSearch', ShopSearch)
app.component('ArticleDisplay', ArticleDisplay)
app.component('Article', Article)

app.use(router)
app.use(Store)

app.mount('#app')
