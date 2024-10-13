import './assets/main.css'
import { ViteSSG } from 'vite-ssg/single-page'
import 'flowbite'
import HomePage from "@/home/HomePage.vue";

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(HomePage)