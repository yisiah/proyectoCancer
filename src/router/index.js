import Vue from 'vue'
import Router from 'vue-router'
import singIn from '../components/singIn'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SingIn',
      component: singIn
    }
  ]
})
