import Vue from 'vue'
import Router from 'vue-router'
import singIn from '../components/singIn'
import singUp from '../components/singUp'
import pacient from '../components/pacient'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: singIn
    },
    {
      path: '/singin',
      name: 'SingIn',
      component: singIn
    },
    {
      path: '/singup',
      name: 'SingUp',
      component: singUp
    },
    {
      path: '/pacient',
      name: 'Pacient',
      component: pacient
    }
  ]
})
