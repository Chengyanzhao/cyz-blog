import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/container.vue'
import resource from '../components/resource/container.vue'
import tool from '../components/tool/container.vue'
import shp2geojson from '../components/tool/gisTool/shp2GeoJSON.vue'
import colorConvert from '../components/tool/commonTool/colorConvert.vue'
import image2base64 from '../components/tool/commonTool/image2base64.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: home
  }, {
    path: '/home',
    name: 'home',
    component: home
  }, {
    path: '/resource',
    name: 'resource',
    component: resource
  }, {
    path: '/tool',
    name: 'tool',
    component: tool,
    children: [{
      path: 'shp2geojson',
      component: shp2geojson
    }, {
      path: 'colorConvert',
      name: 'colorConvert',
      component: colorConvert
    }, {
      path: 'image2base64',
      name: 'image2base64',
      component: image2base64
    }]
  }]
})
