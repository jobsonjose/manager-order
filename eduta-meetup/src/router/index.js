import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Apoiador from '@/pages/CadastroApoiador'
import Acesso from '@/pages/AcessoUsuario'
import Equipe from '@/pages/Equipe'
import Forum from '@/pages/Forum'
import Apresentacao from '@/pages/Apresentacao'

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
    },
    {
      path: '/equipe',
      name: 'Equipe',
      component: Equipe
    },
    {
      path: '/forum',
      name: 'Forum',
      component: Forum
    },
    {
      path: '/apresentacao',
      name: 'Apresentacao',
      component: Apresentacao
    }
  ]
})
