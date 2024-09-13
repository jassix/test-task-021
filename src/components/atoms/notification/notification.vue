<script setup lang="ts">
import { IoOutlineNotifications } from '@kalimahapps/vue-icons'

import styles from './notification.module.scss'
</script>

<template>
  <div :class="styles.box">
    <span :class="styles.notification" />

    <IoOutlineNotifications :class="styles.icon" />
  </div>
</template>
