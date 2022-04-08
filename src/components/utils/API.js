import axios from 'axios'

const URL_PREFIX = 'http://localhost:3001'

const API = {
    login: (userData) => {
        return axios.post(`${URL_PREFIX}/api/users/login`, userData)
    },
    signup: (userData) => {
        return axios.post(`${URL_PREFIX}/api/users/signup`, userData)
    },
    logout: () => {
        return axios.get(`${URL_PREFIX}/api/users/logout`)
    }
}

export default API