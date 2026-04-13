import Vant from 'vant'
import { createApp } from 'vue'
import { setupStore } from '@/stores'
import App from './App.vue'
import { setupRouter } from './router'
import './style.css'
import 'vant/lib/index.css'

const app = createApp(App)

function setupApp() {
  setupStore(app)
  setupRouter(app)
  app.use(Vant)
}
setupApp()
app.mount('#app')
