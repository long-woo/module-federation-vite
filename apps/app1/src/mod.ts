import { createBridgeComponent } from '@module-federation/bridge-vue3'

import './assets/main.css'
import App from './App.vue'
import router from './router'

export { App, router }

export default createBridgeComponent({
  rootComponent: App,
  appOptions: () => ({
    router,
  }),
})
