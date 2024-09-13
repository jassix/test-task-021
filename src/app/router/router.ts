import { createMemoryHistory, createRouter, RouteRecordRaw } from 'vue-router'

import BaseLayout from '@/components/templates/base-layout'

import { paths } from './paths'

const routes: RouteRecordRaw[] = [
  {
    path: paths.index,
    component: () => import('@/components/pages/home'),
    meta: {
      layout: BaseLayout,
    },
  },
  {
    path: paths.catch,
    component: () => import('@/components/pages/home'),
    meta: {
      layout: BaseLayout,
    },
  },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
