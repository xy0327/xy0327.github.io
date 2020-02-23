import Vue from 'vue'
import MintUI from 'mint-ui'
import router from './router'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import resource from 'vue-resource'
Vue.use(MintUI);
Vue.use(resource)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
