import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// route-level code splitting

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [{
        path: '/',
        component: () => import('@/views/hello.vue'),
    }]
  })
}
