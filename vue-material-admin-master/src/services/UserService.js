import Api from '@/services/Api'

export default {
    index() {
        return Api().get('users')
    },
    post (credentials) {
        return Api().post('users', credentials)
    }
}