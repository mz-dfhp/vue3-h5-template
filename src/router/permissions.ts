import type { Router } from 'vue-router'

export function createRouterPermissions(router: Router) {
  router.beforeEach(async (_to, _from, next) => {
    next()
  })

  router.afterEach((_to) => {
  })

  router.onError((error) => {
    console.log(error, '路由错误')
  })
}
