// import * as Vue from 'vue'
import { createBridgeComponent } from '@module-federation/bridge-vue3'

import './assets/main.css'
import App from './App.vue'
import router from './router'

// const modApp = Vue.defineComponent({
//   render() {
//     return <div id="app1"></div>
//   },
//   setup() {
//     Vue.onMounted(() => {
//       const el = document.querySelector('#app1')
//       const shadowContainer = el?.attachShadow({ mode: 'open' })
//       const styles = document.querySelectorAll(
//         '[data-vite-dev-id*="/apps/app1"]',
//       )
//       const app = Vue.createApp(App)

//       app.use(router)
//       app.mount(shadowContainer as unknown as Element)
//       shadowContainer?.append(
//         ...Array.from(styles).map(style => {
//           const shadowStyle = style.cloneNode(true)

//           style.remove()
//           return shadowStyle
//         }),
//       )
//     })

//     return {}
//   },
// })

export default createBridgeComponent({
  rootComponent: App,
  appOptions: () => ({
    router,
  }),
})
