import type { RouteLocationRaw, Router, RouteRecordRaw } from 'vue-router'

/**
 * @description: router 扩展
 * @param {Router} router
 * @return {*}
 */
export function extensionRouter(router: Router) {
  const replace = router.replace
  const back = router.back

  router.replace = function (arg: RouteLocationRaw) {
    return replace.call(router, arg)
  }
  router.back = function () {
    back.call(router)
  }
}

/**
 * @description: 路由meta信息
 */
export const extensionMeta: Record<RouteRecordRaw['path'], RouteRecordRaw['meta']> = {
  '/index': {
    title: '首页',
  },
}
