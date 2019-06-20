import Vue from 'vue'
import Router from 'vue-router'
import CurrentlyPlaying from '@/components/CurrentlyPlaying'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CurrentlyPlaying',
      component: CurrentlyPlaying
    }
  ]
})
