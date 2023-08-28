import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "../node_modules/rivet-core/css/rivet.min.css";
import "../node_modules/rivet-core/js/rivet.min.js";
import "../node_modules/rivet-icons/dist/rivet-icons.css";
import "../node_modules/rivet-icons/dist/rivet-icons.js";
import "./assets/rivet-vue-library.css"
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
