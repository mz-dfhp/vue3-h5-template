<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '@/stores/settings'

const { theme } = storeToRefs(useSettingsStore())
</script>

<template>
  <van-config-provider :theme="theme">
    <RouterView />
  </van-config-provider>
</template>
