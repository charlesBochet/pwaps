import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/map',
      name: 'map',
      component: () => import(/* webpackChunkName: "map" webpackPreload: true */ './views/Map.vue')
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: () => import(/* webpackChunkName: "timeline" webpackPreload: true */ './views/Timeline.vue')
    },
    {
      path: '/stats',
      name: 'stats',
      component: () => import(/* webpackChunkName: "stats" webpackPreload: true */ './views/Stats.vue')
    }
  ]
})
