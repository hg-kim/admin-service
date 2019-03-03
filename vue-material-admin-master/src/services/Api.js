import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `http://locatlhost:8081/`
    })
}