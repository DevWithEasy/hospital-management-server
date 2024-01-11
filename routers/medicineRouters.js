const { create,update,deleteMedicine,getAllMedicine } = require('../controllers/medicineControllers')
const authenticated = require('../middleware/authenticated')

const router = require('express').Router()

router.post('/',authenticated,create)
    .put('/:id',authenticated,update)
    .delete('/:id',authenticated,deleteMedicine)
    .get('/',getAllMedicine)

module.exports = router