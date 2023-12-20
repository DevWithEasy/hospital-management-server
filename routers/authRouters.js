const { createAdmin, signin } = require('../controllers/authControllers')

const router = require('express').Router()

router.post('/create/admin', createAdmin)
    .post('/signin', signin)


module.exports = router