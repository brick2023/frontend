// 和使用者有關的 api
import axios from 'axios'

const userApi = axios.create({
    baseURL: 'http://brick2.yenslife.top:2023/user',
})

export const getUserName = () => userApi.get('/name')
export const getUserEmail = () => userApi.get('/email')
export const getTest = () => userApi.get('/test', { responseType: 'blob' }) // 用來測試回傳影片 (blob 表示 binary 資料)