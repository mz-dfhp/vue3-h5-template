import type { RouteRecordRaw } from 'vue-router'
import { extensionMeta } from './extensionRoute'

const modules = import.meta.glob([
  '../views/**/*.vue',
  '!../views/**/components/**',
  '!../views/basics/**',
])

const asyncRoutes: RouteRecordRaw[] = Object.entries(modules).map(([key, value]) => {
  const path = key
    .replace('../views', '')
    .replace('.vue', '')
    .replace(/\/index$/, '') || '/'

  return {
    path: path === '/index' ? '' : path,
    component: value,
    meta: {
      title: path.split('/').slice(-1)[0],
      ...(extensionMeta[path] || {}),
    },
  }
})

export { asyncRoutes }
