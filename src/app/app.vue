<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { paths } from '@/app/router'
import HomeLayout from '@/components/templates/base-layout'
import Navbar from '@/components/organisms/navbar'

const route = useRoute()
const layout = computed(() => route.meta.layout || HomeLayout)

const items = [
  {
    label: 'Преимущества Tele2',
    href: paths.advantages,
  },
  {
    label: 'Тарифы',
    href: paths.tariffs,
  },
  {
    label: 'Акции и спецпредложения',
    href: paths.offers,
  },
  {
    label: 'Промотариф Tele2',
    href: paths.promotional,
  },
  {
    label: 'Технология eSIM',
    href: paths.esim,
  },
  {
    label: 'Подключение нового абонента',
    href: paths.connection,
  },
]
</script>

<template>
  <component :is="layout">
    <template #navbar>
      <Navbar :items="items" />
    </template>

    <template #default>
      <router-view />
    </template>
  </component>
</template>
