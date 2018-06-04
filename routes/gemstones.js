const express = require('express')
const router = express.Router()
const ctrl = require('../controller/gemstones.js')

router.post('/', ctrl.create)
router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getOne)
router.put('/:id', ctrl.update)
router.delete('/:id', ctrl.deleteOne)





module.exports = router