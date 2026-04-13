import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import { asyncRoutes } from './asyncRoutes'
import { basicsRoutes } from './basicsRoutes'
import { extensionRouter } from './extensionRoute'
import { createRouterPermissions } from './permissions'

const routes: Array<RouteRecordRaw> = [
  ...basicsRoutes,
  ...asyncRoutes,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createRouterPermissions(router)
extensionRouter(router)

export function setupRouter(app: App<Element>) {
  app.use(router)
}
export default router
