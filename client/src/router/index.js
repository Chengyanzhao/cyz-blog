import Vue from 'vue'
import Router from 'vue-router'
import Resource from '../components/resource/container.vue'
import ResourceDetail from '../components/resource/detail.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'resource',
    component: Resource
  }, {
    path: '/resource',
    name: 'Resource',
    component: Resource
  }, {
    path: '/resource/:name',
    name: 'detail',
    component: ResourceDetail
  }]
})
