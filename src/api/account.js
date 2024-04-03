// 後端 api
import axios from 'axios'

const accountApi = axios.create({
    baseURL: 'http://brick2.yenslife.top:2023/account',
})

export default accountApi;