import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './css/weather.css'
import store from './store/store'

createApp(App).use(store).mount('#app')

