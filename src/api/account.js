// 後端 api
import axios from 'axios'

const accountApi = axios.create({
    baseURL: 'http://localhost:8000/account',
})

export const login = () => accountApi.post('/login')
export const register = () => accountApi.post('/register')
