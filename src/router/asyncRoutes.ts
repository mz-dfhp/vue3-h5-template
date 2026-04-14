import type { RouteRecordRaw } from 'vue-router'
import { extensionMeta } from './extensionRoute'

const modules = import.meta.glob([
  '../views/**/*.vue',
  '!../views/**/components/**',
  '!../views/basics/**',
])

const asyncRoutes: RouteRecordRaw[] = Object.entries(modules).map(([key, value]) => {
  let path = key
    .replace('../views', '')
    .replace(/\.(jsx|tsx|vue)$/, '')
    .replace(/\/index$/, '') || '/'

  path = path.replace(/\[([^\]]+)\]/g, ':$1')

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
