const { createAdmin } = require('../config/authControllers')


const router = require('express').Router()

router.post('/create/admin',createAdmin)


module.exports = router