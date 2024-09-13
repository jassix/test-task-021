<script setup lang="ts">
import { BsGeoAlt, ChMenuHamburger } from '@kalimahapps/vue-icons'
import { RouterLink } from 'vue-router'

import { useNavbarStore } from '@/stores/navbar'
import Logo from '@/components/atoms/logo'
import Notification from '@/components/atoms/notification'

import styles from './navbar.module.scss'

interface NavbarProps {
  items: Array<{
    label: string
    href: string
  }>
}

const props = defineProps<NavbarProps>()
const navbar = useNavbarStore()
</script>

<template>
  <header :class="styles.header">
    <div :class="styles.header__top">
      <div :class="[styles.header__content, 'container']">
        <Logo />

        <ul :class="styles.header__items">
          <li data-city>
            <BsGeoAlt />

            Москва и область
          </li>

          <li>
            <Notification />
          </li>

          <li @click="navbar.toggle()">
            <ChMenuHamburger :class="styles.burger__icon" />
          </li>
        </ul>
      </div>
    </div>

    <nav :class="styles.navbar">
      <div :class="[styles.navbar__content, 'container']">
        <RouterLink
          v-for="item in props.items"
          :key="item.label"
          :to="item.href"
          :active-class="styles.navbar__item_active"
          :data-active="item.label == 'a'"
          :class="styles.navbar__item"
        >
          {{ item.label }}
        </RouterLink>
      </div>
    </nav>

    <div :class="[styles.burger, 'container']" :data-active="navbar.state">
      <div :class="styles.burger__content">
        <RouterLink
          v-for="item in props.items"
          :key="item.label"
          :to="item.href"
          :active-class="styles.burger__item_active"
          :class="styles.burger__item"
        >
          {{ item.label }}
        </RouterLink>
      </div>

      <div :class="styles.burger__location">hello</div>
    </div>
  </header>
</template>
