// 後端 api
import axios from 'axios'

const accountApi = axios.create({
    baseURL: 'http://localhost:8000/account',
})

export default accountApi;