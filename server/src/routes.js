
const AuthenticationController = require('./controllers/AuthenticationController')
const UsersControllerPolicy = require('./policies/UsersControllerPolicy')
const UsersController = require('./controllers/UsersController')

module.exports = (app) => {
    app.post('/login',
        AuthenticationController.login)

    app.get('/users',
        UsersController.index)

    app.get('/users/:userId',
        UsersController.show)

    app.put('/users:userId',
        UsersController.put)
    app.post('/users',
        UsersControllerPolicy.post,
        UsersController.post)
}