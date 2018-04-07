import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/demo/404'
import layout from '@/views/layout/layout'
import sec from '@/views/demo/sec'
import thi from '@/views/demo/thi'
import forth from '@/views/demo/forth'
import login from '@/views/login/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: layout,
      children: [{
          path: 'sec',
          component: sec
        },
        {
          path: 'thi',
          name: 'thi',
          component: thi
        },
        {
          path: 'forth',
          name: 'forth',
          component: forth
        }
      ]
    },
    {
      path: '*',
      component: HelloWorld
    }, {
      path: '/login',
      component: login
    }
  ]
})
