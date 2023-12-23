const { create, getAllFloor } = require('../controllers/floorControllers')
const authenticated = require('../middleware/authenticated')

const router = require('express').Router()

router.post('/',authenticated,create)
    .get('/',authenticated,getAllFloor)


module.exports = router