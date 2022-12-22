const router = require('express').Router()
const { filter, createUser } = require('../controller/user-controller')

router.post('/create-user', createUser)

router.get('/filter', filter)

module.exports = router