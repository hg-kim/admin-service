const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

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
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to create the user'
            })
        }
    },
    async put(req, res) {
        try {
            await User.update(req.body, {
                where: {
                    id: req.params.userId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to update the user'
            })
        }
    }
}
