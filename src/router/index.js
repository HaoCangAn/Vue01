import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Purch from '@/components/caigou/purchase.vue'
import Shop from '@/components/caigou/shopcar.vue'
// import SS from '../components/caigou/cgshenqin.vue'
// import Tab from '../components/caigou/ctable.vue'
import Mxss from '../components/caigou/mingxi/sousuo.vue'
import Pro from '../components/kuangjiaxiexi/kjxy.vue'
import HeT from '../components/caigou/gets/hetong.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/pur',
      component: Purch,
      children: [{
        path: '/pur/shop',
        component: Shop
      },
      {
        path: '/pur/het',
        component: HeT
      }]
    },
    {
      path: '/protocol',
      component: Pro
    },
    {
      path: '/shop',
      name: 'car',
      component: Mxss
    }
  ]
})
