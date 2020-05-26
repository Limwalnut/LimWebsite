// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import introduction from './components/introduction'
import MainContent from './components/MainContent'
import MyCanvas from './components/MyCanvas'

// Vue.component('introduction', introduction)
// Vue.component('MainContent', MainContent)
// Vue.component('MyCanvas', MyCanvas)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
