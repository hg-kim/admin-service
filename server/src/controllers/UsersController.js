const {User} = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const users = await User.findAll({
              
            })
            res.send(users)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the users'
            })
        }
    },
    async post(req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to create the user'
            })
        }
    }
}
