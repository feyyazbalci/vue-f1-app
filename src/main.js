import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import VueCountdown from '@chenfengyuan/vue-countdown';

// Import Quasar css
import 'quasar/dist/quasar.css'
import './assets/main.css'


const app = createApp(App)

app.component(VueCountdown.name, VueCountdown);


app.use(router)
app.use(Quasar)

app.mount('#app')
