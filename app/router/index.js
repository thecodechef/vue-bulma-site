
import routes from './routes.js'
import Router from 'vue-router'

const router = new Router({
  mode: 'history',
  linkExactActiveClass: 'is-active',
  linkActiveClass: 'is-active',
  routes: routes
})

export default router
