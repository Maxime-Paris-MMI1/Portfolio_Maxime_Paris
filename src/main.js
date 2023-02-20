import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import Swup from 'swup';


const swup = new Swup({ /* options */ });

const app = createApp(App)

app.use(router)

app.mount('#app')


