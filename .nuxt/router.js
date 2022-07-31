import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8da8ecee = () => interopDefault(import('../pages/10thquestion.vue' /* webpackChunkName: "pages/10thquestion" */))
const _1306f3ca = () => interopDefault(import('../pages/11thquestion.vue' /* webpackChunkName: "pages/11thquestion" */))
const _6ce25e0b = () => interopDefault(import('../pages/12thquestion.vue' /* webpackChunkName: "pages/12thquestion" */))
const _72846f68 = () => interopDefault(import('../pages/13thquestion.vue' /* webpackChunkName: "pages/13thquestion" */))
const _2099328d = () => interopDefault(import('../pages/14thquestion.vue' /* webpackChunkName: "pages/14thquestion" */))
const _7a749cce = () => interopDefault(import('../pages/15thquestion.vue' /* webpackChunkName: "pages/15thquestion" */))
const _575ff1e2 = () => interopDefault(import('../pages/16thquestion.vue' /* webpackChunkName: "pages/16thquestion" */))
const _2e2b7150 = () => interopDefault(import('../pages/17thquestion.vue' /* webpackChunkName: "pages/17thquestion" */))
const _101583b3 = () => interopDefault(import('../pages/9thquestion.vue' /* webpackChunkName: "pages/9thquestion" */))
const _7d794a56 = () => interopDefault(import('../pages/eightquestion.vue' /* webpackChunkName: "pages/eightquestion" */))
const _4b5ce6ca = () => interopDefault(import('../pages/endpage.vue' /* webpackChunkName: "pages/endpage" */))
const _2052f3fd = () => interopDefault(import('../pages/fifthquestion.vue' /* webpackChunkName: "pages/fifthquestion" */))
const _ba3b1914 = () => interopDefault(import('../pages/firstquestion.vue' /* webpackChunkName: "pages/firstquestion" */))
const _0343aa50 = () => interopDefault(import('../pages/fourthquestion.vue' /* webpackChunkName: "pages/fourthquestion" */))
const _555267ed = () => interopDefault(import('../pages/result.vue' /* webpackChunkName: "pages/result" */))
const _2e1264ac = () => interopDefault(import('../pages/secondquestion.vue' /* webpackChunkName: "pages/secondquestion" */))
const _c8aac6f2 = () => interopDefault(import('../pages/seventhquestion.vue' /* webpackChunkName: "pages/seventhquestion" */))
const _eb3e9ac8 = () => interopDefault(import('../pages/sixthquestion.vue' /* webpackChunkName: "pages/sixthquestion" */))
const _37d5cbad = () => interopDefault(import('../pages/thirdquestion.vue' /* webpackChunkName: "pages/thirdquestion" */))
const _36c087b2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/10thquestion",
    component: _8da8ecee,
    name: "10thquestion"
  }, {
    path: "/11thquestion",
    component: _1306f3ca,
    name: "11thquestion"
  }, {
    path: "/12thquestion",
    component: _6ce25e0b,
    name: "12thquestion"
  }, {
    path: "/13thquestion",
    component: _72846f68,
    name: "13thquestion"
  }, {
    path: "/14thquestion",
    component: _2099328d,
    name: "14thquestion"
  }, {
    path: "/15thquestion",
    component: _7a749cce,
    name: "15thquestion"
  }, {
    path: "/16thquestion",
    component: _575ff1e2,
    name: "16thquestion"
  }, {
    path: "/17thquestion",
    component: _2e2b7150,
    name: "17thquestion"
  }, {
    path: "/9thquestion",
    component: _101583b3,
    name: "9thquestion"
  }, {
    path: "/eightquestion",
    component: _7d794a56,
    name: "eightquestion"
  }, {
    path: "/endpage",
    component: _4b5ce6ca,
    name: "endpage"
  }, {
    path: "/fifthquestion",
    component: _2052f3fd,
    name: "fifthquestion"
  }, {
    path: "/firstquestion",
    component: _ba3b1914,
    name: "firstquestion"
  }, {
    path: "/fourthquestion",
    component: _0343aa50,
    name: "fourthquestion"
  }, {
    path: "/result",
    component: _555267ed,
    name: "result"
  }, {
    path: "/secondquestion",
    component: _2e1264ac,
    name: "secondquestion"
  }, {
    path: "/seventhquestion",
    component: _c8aac6f2,
    name: "seventhquestion"
  }, {
    path: "/sixthquestion",
    component: _eb3e9ac8,
    name: "sixthquestion"
  }, {
    path: "/thirdquestion",
    component: _37d5cbad,
    name: "thirdquestion"
  }, {
    path: "/",
    component: _36c087b2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
