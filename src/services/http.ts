import { BASE_URL } from '@/utils/configEnv'
import axios, { AxiosError } from 'axios'
import JSCookie from 'js-cookie'

const { CancelToken } = axios
const source = CancelToken.source()
const httpRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  cancelToken: source.token
})

httpRequest.interceptors.request.use(
  (config) => {
    const accessToken = JSCookie.get('accessToken')
    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

httpRequest.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const { response } = error as AxiosError
    if (response?.status === 401) {
      JSCookie.remove('accessToken')
      window.location.replace('')
    }
    return Promise.reject(error)
  }
)
export default httpRequest
