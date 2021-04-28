import Vue from 'vue'
import App from './App.vue'

import Cloudbase from '@cloudbase/vue-provider'
Vue.use(Cloudbase, {
  env: 'hello-cloudbase-4gg7bj4836d2d514'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
