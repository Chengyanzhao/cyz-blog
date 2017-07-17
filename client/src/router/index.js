import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/container.vue'
import resource from '../components/resource/container.vue'
import tool from '../components/tool/container.vue'
import imgconvert from '../components/tool/item/imgconvert.vue'
import shp2geojson from '../components/tool/item/shp2GeoJSON.vue'
import colorConvert from '../components/tool/commonTool/colorConvert.vue'
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
      path: 'imgconvert',
      component: imgconvert
    }, {
      path: 'shp2geojson',
      component: shp2geojson
    }, {
      path: 'colorConvert',
      name: 'colorConvert',
      component: colorConvert
    }]
  }]
})
