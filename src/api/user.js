// 和使用者有關的 api
import axios from 'axios'

const userApi = axios.create({
    baseURL: 'http://localhost:8000/user',
})

export const getUserName = () => userApi.get('/name')
export const getUserEmail = () => userApi.get('/email')
export const test = () => userApi.get('/test')