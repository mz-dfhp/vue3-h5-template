<script setup lang="ts">
import { useRouter } from 'vue-router'
import { getListApi } from '@/api/list'
import { useListPagination } from '@/composables/useListPagination'

const router = useRouter()

const { list, isRefreshing, isLoading, isFinished, onRefresh, onLoadMore } = useListPagination({ fetchFn: getListApi })

/**
 * 返回上一页
 */
function onBack() {
  router.back()
}
</script>

<template>
  <div class="list-page">
    <van-sticky>
      <van-nav-bar title="列表" left-arrow @click-left="onBack" />
    </van-sticky>
    <van-pull-refresh v-model="isRefreshing" class="list-refresh" @refresh="onRefresh">
      <van-list
        v-model:loading="isLoading"
        :finished="isFinished"
        finished-text="没有更多了"
        @load="onLoadMore"
      >
        <div
          v-for="item in list"
          :key="item.id"
          class="list-item"
        >
          <div class="list-item-header">
            <span class="list-item-title">{{ item.title }}</span>
            <van-tag type="primary" class="list-item-tag">
              {{ item.tag }}
            </van-tag>
          </div>
          <p class="list-item-desc">
            {{ item.desc }}
          </p>
          <span class="list-item-time">{{ item.time }}</span>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<style scoped lang="scss">
.list-page {
  min-height: 100vh;
  background-color: var(--van-background);
}

.list-refresh {
  min-height: calc(100vh - 46px);
}

.list-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px 16px;
  background-color: var(--van-background-2);
  border-bottom: 1px solid var(--van-border-color);
}

.list-item-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.list-item-title {
  font-size: 15px;
  font-weight: 500;
  color: var(--van-text-color);
}

.list-item-tag {
  flex-shrink: 0;
}

.list-item-desc {
  margin: 0;
  font-size: 13px;
  color: var(--van-text-color-2);
  line-height: 1.5;
}

.list-item-time {
  font-size: 12px;
  color: var(--van-text-color-3);
}
</style>
