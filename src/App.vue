<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

/**
 * 跳转到指定路由
 * @param path - 目标路径
 */
function onNavClick(path: string) {
  router.push(path)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- 顶部导航栏 -->
    <header class="bg-white shadow-sm sticky top-0 z-10">
      <div class="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 class="text-xl font-bold text-gray-800 tracking-tight">
          AI Project
        </h1>
        <nav class="flex gap-1">
          <div class="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors cursor-pointer" @click="onNavClick('/')">
            首页
          </div>
          <div class="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors cursor-pointer" @click="onNavClick('/counter')">
            计数器
          </div>
        </nav>
      </div>
    </header>

    <!-- 路由路径提示 -->
    <div class="bg-indigo-600 text-indigo-100 text-xs text-center py-1.5 tracking-wide">
      当前路径：{{ $route.fullPath }}
    </div>

    <!-- 主内容区 -->
    <main class="flex-1 max-w-4xl w-full mx-auto px-6 py-8">
      <RouterView />
    </main>
  </div>
</template>
