// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueLazyload from 'vue-lazyload'
import Lightbox from 'vue-pure-lightbox'
import VueLazyLoadVideo from 'vue-lazyload-video'

Vue.config.productionTip = false

let VueMoment = require('vue-moment')

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(VueMoment)
Vue.use(VueLazyload)
Vue.use(Lightbox)
Vue.use(VueLazyLoadVideo)
