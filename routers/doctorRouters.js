const { create, getAllDoctor, getDoctor, update, deleteDoctor } = require('../controllers/doctorControllers')
const authenticated = require('../middleware/authenticated')
const upload = require('../middleware/upload')

const router = require('express').Router()

router.post('/',authenticated,upload.single('image'),create)
    .put('/:id',authenticated,update)
    .delete('/:id',authenticated,deleteDoctor)
    .get('/',authenticated,getAllDoctor)
    .get('/:id',authenticated,getDoctor)
    .post('/shedule/:d_id',authenticated,)
    .put('/shedule/:id',authenticated,)
    .delete('/shedule/:d_id',authenticated,)
    .get('/shedule/',authenticated,)


module.exports = router