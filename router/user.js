const { filter, createUser } = require('../controller/user-controller')

const router = require('express').Router()


router.post('/create-user', createUser)

router.get('/filter', filter)

module.exports = router