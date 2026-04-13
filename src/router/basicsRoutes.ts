import type { RouteRecordRaw } from 'vue-router'

export const basicsRoutes: Array<RouteRecordRaw> = [
  {
    path: '/:path(.*)*',
    component: () => import('@/views/basics/404.vue'),
    meta: {
      title: '404',
    },
  },
]
