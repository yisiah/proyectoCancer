import Vue from 'vue'
import Router from 'vue-router'
import singIn from '../components/singIn'
import singUp from '../components/singUp'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SingIn',
      component: singIn
    },
    {
      path: '/2',
      name: 'SingUp',
      component: singUp
    }
  ]
})
