const { create, getAllFloor, update, deleteData, getRooms, createRoom, updateRoom } = require('../controllers/floorControllers')
const authenticated = require('../middleware/authenticated')

const router = require('express').Router()

router.post('/',authenticated,create)
    .get('/',authenticated,getAllFloor)
    .put('/:id',authenticated,update)
    .delete('/:id',authenticated,deleteData)
    .get('/rooms/:id',authenticated,getRooms)
    .post('/room',authenticated,createRoom)
    .put('/room/:id',authenticated,updateRoom)


module.exports = router