import Vue from 'vue'
import Router from 'vue-router'
import singIn from '../components/singIn'
import singUp from '../components/singUp'
import pacient from '../components/pacient'
import history from '../components/history'

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
    },
    {
      path: '/history',
      name: 'History',
      component: history
    }
  ]
})
