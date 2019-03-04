import Vue from "vue"
import './plugins/vuetify'
import App from "./App.vue"
import router from "./router/"
import "./registerServiceWorker"
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'font-awesome/css/font-awesome.css'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'
import store from '@/store/store'


Vue.config.productionTip = false;

Vue.use(Vuetify)

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
