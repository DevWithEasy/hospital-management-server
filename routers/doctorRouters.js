const { create, getAllDoctor, getDoctor, update, deleteDoctor, createShedule, updateShedule, deleteShedule } = require('../controllers/doctorControllers')
const authenticated = require('../middleware/authenticated')
const upload = require('../middleware/upload')

const router = require('express').Router()

router.post('/',authenticated,upload.single('image'),create)
    .put('/:id',authenticated,upload.single('image'),update)
    .delete('/:id',authenticated,deleteDoctor)
    .get('/',authenticated,getAllDoctor)
    .get('/:id',authenticated,getDoctor)
    .post('/shedule/:d_id',authenticated,createShedule)
    .put('/shedule/:id',authenticated,updateShedule)
    .delete('/shedule/:id',authenticated,deleteShedule)
module.exports = router