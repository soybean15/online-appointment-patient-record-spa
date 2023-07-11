import { createApp,markRaw } from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import './components/axios'
import '@/assets/css/style.css'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const app = createApp(App).use(Quasar, quasarUserOptions)
const pinia = createPinia()

pinia.use(({store})=>{
    store.router = markRaw(router)

})

app.use(pinia)
app.use(router)
app.mount('#app')