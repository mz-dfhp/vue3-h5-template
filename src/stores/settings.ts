import { defineStore } from 'pinia'
import { ref } from 'vue'

type Theme = 'light' | 'dark'

export const useSettingsStore = defineStore(
  'STORE__SETTINGS',
  () => {
    /** 当前主题 */
    const theme = ref<Theme>('dark')

    /**
     * 切换主题
     */
    function toggleTheme() {
      theme.value = theme.value === 'dark' ? 'light' : 'dark'
    }

    return { theme, toggleTheme }
  },
  {
    persist: {
      storage: localStorage,
      pick: ['theme'],
    },
  },
)
