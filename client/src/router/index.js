import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/container.vue'
import resource from '../components/resource/container.vue'
import tool from '../components/tool/container.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: home
  }, {
    path: '/resource',
    name: 'resource',
    component: resource
  }, {
    path: '/tool',
    name: 'tool',
    component: tool
  }]
})
