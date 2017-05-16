import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Vuex from 'vuex'

import router from './router'

Vue.use(Router)
Vue.use(Meta)
Vue.use(Vuex)

import App from './App.vue'

new Vue({
  components: { App },
  data: {
    title: `Vue Bulma Site`,
    subtitle: `A Vue.js version of the Bulma CSS webite`,
    version: `0.4.1`,
    fullName: 'Jeremy Bolding'
  },
  router,
  metaInfo: {
    title: this.title,
    titleTemplate: null
  },
  template: `<App/>`
}).$mount('#app')
