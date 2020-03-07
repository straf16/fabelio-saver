const router = require('express').Router()
const ProductController = require('../controllers/product')
const getData = require('../middlewares/getData')

router.post('/', getData, ProductController.add)
router.get('/', ProductController.get)
router.get('/:id', ProductController.getId)
router.delete('/:id', ProductController.delete)

module.exports = router
