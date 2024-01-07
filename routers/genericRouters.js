const { create,update,deleteGeneric,getAllGeneric } = require('../controllers/genericControllers')
const authenticated = require('../middleware/authenticated')

const router = require('express').Router()

router.post('/',authenticated,create)
    .put('/:id',authenticated,update)
    .delete('/:id',authenticated,deleteGeneric)
    .get('/',demo)

module.exports = router