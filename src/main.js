import Vue from 'vue'
import App from './App.vue'

require('../node_modules/materialize-css/dist/css/materialize.min.css')
require('../node_modules/materialize-css/dist/js/materialize.min.js')
require('../node_modules/material-design-icons/iconfont/material-icons.css')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
