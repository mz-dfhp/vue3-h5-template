import { defineStore } from 'pinia'
import { ref } from 'vue'
import store from '@/stores'

const pid = 'STORE__COUNTER'
export const useCounterStore = defineStore(
  pid,
  () => {
    const count = ref(0)

    function increment() {
      count.value++
    }
    function decrement() {
      count.value--
    }

    return {
      count,
      increment,
      decrement,
    }
  },
  {
    persist: {
      storage: localStorage,
      pick: ['count'],
    },
  },
)

export const useCounterStoreOutside = () => useCounterStore(store) // 组件外部使用
