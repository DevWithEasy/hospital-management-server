const { create, getAllFloor, update, deleteData, getRooms, createRoom, updateRoom, deleteRoom, getAllFloorDetails } = require('../controllers/floorControllers')
const authenticated = require('../middleware/authenticated')

const router = require('express').Router()

router.post('/',authenticated,create)
    .get('/',authenticated,getAllFloor)
    .put('/:id',authenticated,update)
    .delete('/:id',authenticated,deleteData)
    .get('/rooms/:id',authenticated,getRooms)
    .post('/room',authenticated,createRoom)
    .put('/room/:id',authenticated,updateRoom)
    .delete('/room/:f_id/:r_id',authenticated,deleteRoom)
    .get('/rooms/',authenticated,getAllFloorDetails)


module.exports = router