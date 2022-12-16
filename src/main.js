import { createApp } from 'vue'
import App from './App.vue'
import Router from './route/router'
import 'bootstrap/dist/css/bootstrap.css';
import prismic from "@/prismic/prismic";

createApp(App).use(Router).use(prismic).mount('#app')
