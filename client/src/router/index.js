import Vue from 'vue'
import Router from 'vue-router'
import resource from '../components/resource/container.vue'
import tool from '../components/tool/container.vue'
// import ResourceDetail from '../components/resource/detail.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'resource',
    component: resource
  }, {
    path: '/resource',
    name: 'resource',
    component: resource
  }, {
    path: '/tool',
    name: 'tool',
    component: tool
  }]
  // , {
  //   path: '/resource/:name',
  //   name: 'detail',
  //   component: ResourceDetail
  // }
})
