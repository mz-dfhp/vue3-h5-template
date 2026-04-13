export const RequestContentType = {
  // json
  JSON: 'application/json;charset=UTF-8',
  // xml
  TEXT: 'text/plain;charset=UTF-8',
  // form-data 一般配合qs
  FORM_URLENCODED: 'application/x-www-form-urlencoded;charset=UTF-8',
  // 文件上传
  FORM_DATA: 'multipart/form-data',
} as const

export const ResponseCode = {
  SUCCESS_CODE: 0,
  LOGIN_CODE: -1,
  ERROR_CODE: -2,
} as const

export const RequestConfig = {
  BASE_URL: '/api',
  TIME_OUT: 100000,
  TOKEN_NAME: 'Authorization',
} as const
