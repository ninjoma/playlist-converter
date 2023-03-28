import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as VueRouter from "vue-router";
import HomeView from '../src/views/HomeView.vue'

const routes = [
    { path: '/', component: HomeView },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

const app = createApp(App);

app.use(router);

app.mount('#app');
