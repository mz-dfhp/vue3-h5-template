<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { showDialog } from 'vant'
import { useRouter } from 'vue-router'
import { useSettingsStore } from '@/stores/settings'

const router = useRouter()
const settingsStore = useSettingsStore()
const { theme } = storeToRefs(settingsStore)
const { toggleTheme } = settingsStore

function onOpenDialog() {
  showDialog({ message: '提示' })
}

function onNavClick(path: string) {
  router.push(path)
}
</script>

<template>
  <div class="flex flex-wrap gap-2 p-2">
    <van-button type="primary" @click="onOpenDialog">
      show
    </van-button>
    <van-button type="primary" @click="onNavClick('/list')">
      下拉刷新/上拉加载
    </van-button>
    <van-button type="default" @click="toggleTheme">
      {{ theme === 'dark' ? '切换浅色' : '切换深色' }}
    </van-button>
  </div>
</template>

<style scoped lang="scss"></style>
