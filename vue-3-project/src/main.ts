import { createApp } from 'vue'
import { vfmPlugin } from 'vue-final-modal'

import App from './App.vue'

import './assets/main.css'

const app = createApp(App);
app.use(vfmPlugin);

app.mount('#app')
