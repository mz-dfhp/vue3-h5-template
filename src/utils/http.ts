import axios from 'axios'
import { RequestConfig, ResponseCode } from '@/constants/http'
import { useUserStoreOutside } from '@/stores/user'

/**
 *  axios 不需要过度封装 https://github.com/axios/axios
 */
export const http = axios.create({
  baseURL: import.meta.env.MODE === 'dev' ? '' : import.meta.env.VITE_APP_API,
  timeout: RequestConfig.TIME_OUT as number,
})

http.interceptors.request.use(
  (config) => {
    const token = useUserStoreOutside().token
    if (token && config.headers)
      config.headers[RequestConfig.TOKEN_NAME] = token
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

http.interceptors.response.use(
  (config) => {
    // token 失效
    if (config.data.code === ResponseCode.LOGIN_CODE) {
      console.log(config.data.message)

      return Promise.reject(config.data)
    }
    // 错误异常
    else if (config.data.code !== ResponseCode.SUCCESS_CODE) {
      console.log(config.data.message)

      return Promise.reject(config.data)
    }
    return Promise.resolve(config.data)
  },
  (error) => {
    let message = error.message
    if (message === 'Network Error')
      message = '网络故障'

    else if (message.includes('timeout'))
      message = '接口请求超时'

    else if (message.includes('Request failed with status code'))
      message = '接口异常'

    console.log(message)
    return Promise.reject(error)
  },
)
