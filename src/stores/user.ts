import { defineStore } from 'pinia'
import { ref } from 'vue'
import store from '@/stores'

export interface IUserInfo {
  username: string
}

const pid = 'STORE__USER'
export const useUserStore = defineStore(
  pid,
  () => {
    const token = ref('token')
    const userInfo = ref<IUserInfo>({
      username: 'admin',
    })
    function setToken(data: string) {
      token.value = data
    }
    function setUserInfo(data: IUserInfo) {
      userInfo.value = data
    }
    return {
      token,
      userInfo,
      setToken,
      setUserInfo,
    }
  },
  {
    persist: {
      storage: localStorage,
      pick: ['token'],
    },
  },
)

export const useUserStoreOutside = () => useUserStore(store) // 组件外部使用
