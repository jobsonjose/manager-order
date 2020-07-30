import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Apoiador from '@/pages/CadastroApoiador'
import Acesso from '@/pages/AcessoUsuario'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/apoiador',
      name: 'Apoiador',
      component: Apoiador
    },
    {
      path: '/acesso',
      name: 'Acesso',
      component: Acesso
    }
  ]
})
