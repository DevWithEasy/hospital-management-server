const { create, getAllFloor, update, deleteData } = require('../controllers/floorControllers')
const authenticated = require('../middleware/authenticated')

const router = require('express').Router()

router.post('/',authenticated,create)
    .get('/',authenticated,getAllFloor)
    .put('/:id',authenticated,update)
    .delete('/:id',authenticated,deleteData)


module.exports = router