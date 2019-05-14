import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index.vue'
import toHome from '@/pages/toHome/index.vue'
import foodType from '@/pages/foodType/index.vue'
import vipFood from '@/pages/vipFood/index.vue'
import shopCar from '@/pages/shopCar/index.vue'
import mySelf from '@/pages/mySelf/index.vue'
import Location from '@/pages/fixedPosition/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/tohome',
      children: [
        {
          path: '/tohome',
          name: 'toHome',
          component: toHome
        },
        {
          path: '/foodtype',
          name: 'foodType',
          component: foodType
        },
        {
          path: '/vipfood',
          name: 'vipFood',
          component: vipFood
        },
        {
          path: '/shopcar',
          name: 'shopCar',
          component: shopCar
        },
        {
          path: '/myself',
          name: 'mySelf',
          component: mySelf
        }
      ]
    },
    {
      path: '/location',
      name: 'Location',
      component: Location
    }
  ]
})
