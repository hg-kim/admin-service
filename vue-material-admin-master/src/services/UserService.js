import Api from '@/services/Api'

export default {
    index() {
        return Api().get('users')
    },
    show (userId) {
        return Api().get(`users/${userId}`)
    },
    post (credentials) {
        return Api().post('users', credentials)
    },
    put (user) {
        return Api().put(`users/${user.id}`, user)
    }
}