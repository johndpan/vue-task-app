import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

// require('../node_modules/materialize-css/dist/css/materialize.min.css')
// require('../node_modules/materialize-css/dist/js/materialize.min.js')
require('../node_modules/material-design-icons/iconfont/material-icons.css')

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
