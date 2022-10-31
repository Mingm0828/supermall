<<<<<<< HEAD
import Vue from 'vue'
import App from './App.vue'
import router  from './router'


Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
  router
}).$mount('#app')
=======
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)
app.use(router)
app.mount('#app')
>>>>>>> 1049041f2f0d320294b170adb2890e84194cacea
