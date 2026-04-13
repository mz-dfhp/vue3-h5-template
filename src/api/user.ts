import { http } from '@/utils/http'

export interface LoginInfo {
  token: string
}

export function loginIn(params: {
  user_name: string
  password: string
}) {
  return http.post<LoginInfo>('/member/login', params)
}
